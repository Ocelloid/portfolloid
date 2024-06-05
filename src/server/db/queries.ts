"use server";
import { db } from "~/server/db";
import { inquiries, technologies } from "./schema";
import { asc, eq } from "drizzle-orm";

export interface Inquiry {
  id?: number | null;
  username: string | null;
  email: string | null;
  organization?: string | null;
  services?: string | null;
  message: string | null;
}
export interface Tech {
  id?: number | null;
  name: string | null;
  icon: string | null;
  link: string | null;
  desc: string | null;
  code: string | null;
  color: string | null;
}

export async function sendInquiry(inquiry: Inquiry) {
  await db.insert(inquiries).values({
    username: inquiry.username,
    email: inquiry.email,
    organization: inquiry.organization,
    services: inquiry.services,
    message: inquiry.message,
  });
}

export async function getInquiries() {
  return db.query.inquiries.findMany();
}

export async function createTechnology(technology: Tech) {
  await db.insert(technologies).values({
    name: technology.name,
    icon: technology.icon,
    link: technology.link,
    desc: technology.desc,
    code: technology.code,
    color: technology.color,
  });
}

export async function updateTechnology(id: number, technology: Tech) {
  await db
    .update(technologies)
    .set({
      name: technology.name,
      icon: technology.icon,
      link: technology.link,
      desc: technology.desc,
      code: technology.code,
      color: technology.color,
    })
    .where(eq(technologies.id, id));
}

export async function deleteTechnology(id: number) {
  await db.delete(technologies).where(eq(technologies.id, id));
}

export async function getTechnologies() {
  return await db.query.technologies.findMany({
    orderBy: [asc(technologies.updatedAt)],
  });
}

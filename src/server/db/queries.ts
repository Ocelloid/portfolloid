"use server";
import { db } from "~/server/db";
import { inquiries, technologies } from "./schema";
import { eq } from "drizzle-orm";

export interface Inquiry {
  username: string;
  email: string;
  organization?: string | undefined;
  services?: string | undefined;
  message: string;
}
export interface Tech {
  id?: number | null;
  name: string | null;
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

export async function createTechnology(technology: Tech) {
  await db.insert(technologies).values({
    name: technology.name,
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
  const technologies = await db.query.technologies.findMany();
  return technologies;
}

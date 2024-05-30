"use server";
import { db } from "~/server/db";
import { inquiries, technologies } from "./schema";

export interface Inquiry {
  username: string;
  email: string;
  organization?: string | undefined;
  services?: string | undefined;
  message: string;
}
export interface Tech {
  name: string;
  link: string;
  desc: string;
  code: string;
  color: string;
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

export async function getTechnologies() {
  const technologies = await db.query.technologies.findMany();
  return technologies;
}

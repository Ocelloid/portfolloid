"use server";
import { db } from "~/server/db";
import { inquiries } from "./schema";

export interface Inquiry {
  username: string;
  email: string;
  organization?: string | undefined;
  services?: string | undefined;
  message: string;
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

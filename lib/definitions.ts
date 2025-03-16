import type { StaticImageData } from "next/image";

export type Job = {
  companyLogo: StaticImageData | string;
  companyName: string;
  title: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
};

export type Socials = Record<string, { href: string; handle: string }>;

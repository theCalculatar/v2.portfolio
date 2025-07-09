"use server";

import { cache } from "react";
import data from "@/data/data.json";

export const getProject = cache(async (slug: string) => {
  const res = await data.projects.find((project) => project.slug === slug);

  return res;
});

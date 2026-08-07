import { nucleus } from "./nucleus";
import { isNucleusError } from "@techsolace-studios/nucleus-sdk";

export async function getList<T>(model: string): Promise<T[]> {
  try {
    const page = await nucleus.get(model, { sort: "createdAt" }, { revalidate: 300 });
    return page.data.map((entry) => entry.data) as T[];
  } catch (e) {
    if (isNucleusError(e)) {
      console.error(`Nucleus fetch failed for "${model}": ${e.code} ${e.message}`);
      return [];
    }
    throw e;
  }
}

export async function getTestimonials() {
  return getList<{ quote: string; authorRole: string; starRating: number }>("testimonial");
}

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addMeal } from "./meals";

const isInvalidateText = (text) => {
  return !text || text.trim() === "";
};

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidateText(meal.title) ||
    isInvalidateText(meal.summary) ||
    isInvalidateText(meal.instructions) ||
    isInvalidateText(meal.creator) ||
    isInvalidateText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }
  await addMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}

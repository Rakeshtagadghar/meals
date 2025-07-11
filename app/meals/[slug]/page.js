import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={`${meal.image}`} alt={meal.title} fill sizes="100vw" />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>

          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        />
      </main>
    </>
  );
}

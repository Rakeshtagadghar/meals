import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import MealsLoading from "./loading-out";
import classes from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse delicious meals shared by our vibrant community",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default  function MealsPage() {

  return (
    <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created <span className={classes.highlight}>by you</span>
      </h1>
      <p>Choose your favuorite recipe and cook it yourself. It is easy and fun</p>
    <p className={classes.cta}>
      <Link href="/meals/share">Share your Favorite Recipe</Link>
    </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<MealsLoading/>}>
      <Meals/>
      </Suspense>
      </main>
    </>
  );
}
import Link from "next/link";

export default function ShareMeals() {
  return (
    <>
      <div>Share meals</div>
      <Link href="/">Main</Link>
      <Link href="/meals">Meals</Link>
    </>
  );
}
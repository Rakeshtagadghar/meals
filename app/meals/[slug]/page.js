import Link from "next/link";

export default function Meal({ params }) {
  return (
    <>
      <div>Meal: {params.slug}</div>
      <Link href="/">Main</Link>
      <Link href="/meals">Meals</Link>
    </>
  );
}
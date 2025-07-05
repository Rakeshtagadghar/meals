import Link from "next/link";

export default function Meals() {
  return (
    <>
      <div>Meals</div>
      <Link href="/">Main</Link>
      <Link href="/meals/share">Share meals</Link>
      <Link href="/meals/curry">Curry</Link>
    </>
  );
}
import Link from "next/link";

export default function NotFound() {
  return <main className="not-found">
    <h1>Not Found</h1>
    <p>Unfortunately, we could not find the requested page or resource.</p>
    <p>
      <Link href="/">Go to the home page</Link>
    </p>
  </main>;
}
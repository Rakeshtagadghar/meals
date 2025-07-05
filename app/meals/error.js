'use client';


export default function MealsError({error, reset}) {
  return <main className="error">
    <h1>An error occurred</h1>
    <p>Failed to fetch meals. please try again later.</p>
 
  </main>;
}
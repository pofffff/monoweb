import Link from 'next/link';

export async function fetchData(): Promise<any> {
  // return await fetchPageNotFound(language);
}

export default async function NotFound() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Page not found</h1>
      <p>This page could not be found!</p>
      <p>
        <Link href="/">Go to homepage</Link>
      </p>
    </div>
  );
}

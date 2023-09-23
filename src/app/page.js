import React from 'react'; // Import React
import Head from 'next/head';
import Link from 'next/link'; // Import Link from Next.js

const Page = () => {
  return (
    <div>
      <main>
        <Link href="/create">Create new poll</Link>
      </main>
    </div>
  );
};

export default Page;

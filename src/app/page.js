import React from 'react'; // Import React
import Head from 'next/head';
import Link from 'next/link'; // Import Link from Next.js

const Page = () => {
  return (
    <div>
      <main>
      <h1>Wellcome to VillageVote!</h1>
        <ul>
          <li><Link href="/create">Create new poll</Link></li>
          <li><Link href="https://github.com/ClippyCat/village-vote">VillageVote on Github</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default Page;

"use client";
import Head from 'next/head';
import Vote from "./Vote";
import { useParams } from 'next/navigation';

const VotePage = (props) => {
  const { id } = props.searchParams;

  return (
    <div>
      <Head>
        <title> Vote Now -- Village Vote </title>
      </Head>
      <main>
        <h1>Vote Now!</h1>
        <Vote id={id}/>
      </main>
    </div>
  );
};

export default VotePage;

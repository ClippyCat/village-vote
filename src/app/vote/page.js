import Head from 'next/head';
import Vote from "./Vote";
import List from "./List";

const VotePage = () => {
  return (
    <div>
      <Head>
        <title> Vote Now -- Village Vote </title>
      </Head>
      <main>
        <h1>Test list</h1>
        <Vote/>
      </main>
    </div>
  );
};

export default VotePage;

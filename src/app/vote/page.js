import Head from 'next/head';
import Vote from "./Vote";
import List from "./List";

const VotePage = () => {
  return (
    <div>
      <Head>
        <title> Vote -- Village Vote </title>
      </Head>
      <main>
        <Vote/>
        <h1>Test list</h1>
        <List/>
      </main>
    </div>
  );
};

export default VotePage;

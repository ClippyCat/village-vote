import Head from 'next/head';
import List from "./List";

const VotePage = () => {
  return (
    <div>
      <Head>
        <title> Find A Poll -- Village Vote </title>
      </Head>
      <main>
        <h1>Test list</h1>
        <List/>
      </main>
    </div>
  );
};

export default VotePage;

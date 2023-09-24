import Head from 'next/head';
import Vote from "./Vote";

const VotePage = () => {
  return (
    <div>
      <Head>
        <title> Vote -- Village Vote </title>
      </Head>
      <main>
        <Vote/>
      </main>
    </div>
  );
};

export default VotePage;

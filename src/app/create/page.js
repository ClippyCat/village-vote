import Head from 'next/head';
import CreatePoll from './CreatePoll';
import SubmitPoll from './SubmitPoll';
const CreatePollPage = () => {
  return (
    <div>
      <Head>
        <title> Create Poll -- Village Vote </title>
      </Head>
      <main>
        <CreatePoll />
        <SubmitPoll />
      </main>
    </div>
  );
};

export default CreatePollPage;

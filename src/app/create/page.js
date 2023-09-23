import Head from 'next/head';
import CreatePoll from '../../components/CreatePoll';

const CreatePollPage = () => {
  return (
    <div>
      <Head>
        <title> Create Poll -- Village Vote </title>
      </Head>
      <main>
        <CreatePoll />
      </main>
    </div>
  );
};

export default CreatePollPage;

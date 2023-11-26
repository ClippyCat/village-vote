"use client";
import Head from 'next/head';
import PollStateManagement from "./PollStateManagement";
import CreatePoll from './CreatePoll';
import SubmitPoll from './SubmitPoll';

const CreatePollPage = () => {
  return (
    <PollStateManagement>
      {({ handleSubmit }) => (
        <div>
          <Head>
            <title>Create Poll -- Village Vote</title>
          </Head>
          <main>
            <form onSubmit={handleSubmit}>
              <CreatePoll />
              <button type="submit">Submit</button>
            </form>
          </main>
        </div>
      )}
    </PollStateManagement>
  );
};

export default CreatePollPage;

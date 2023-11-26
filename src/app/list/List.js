"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/list/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <ul>
      {data.map((poll) => (
        <li key={poll.id}>
          <Link href={{
            pathname: "/vote/",
            query: {id: poll.id},
          }}>{poll.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default List;

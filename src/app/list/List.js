"use client";
import { useEffect, useState } from 'react';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000')
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
        <li key={poll.id}>{poll.title}</li>
      ))}
    </ul>
  );
};

export default List;

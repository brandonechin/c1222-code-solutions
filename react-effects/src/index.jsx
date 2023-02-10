/* eslint-disable no-unused-vars -- Remove me */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import readItems from './read.js';

function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  // Your code here:
  //  - Read the items using `readItems` and update state so the list displays

  useEffect(() => {
    const data = readItems();
    data
      .then((resolve) => {
        setItems(resolve);
        setIsLoading(false);
      })
      .catch((reject) => {
        // eslint-disable-next-line no-console
        console.log(reject);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<List />);

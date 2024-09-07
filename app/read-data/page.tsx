'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function ReadData() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, 'Users'));
      const fetchedData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(fetchedData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Read Data from Firestore</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{JSON.stringify(item.email)}</li>
        ))}
      </ul>
    </div>
  );
}
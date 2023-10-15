import React, { useState, useEffect } from 'react';
import Film from './Film'; // Import the Film component

const ApiDataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint you want to fetch
    const apiUrl = 'http://localhost:3030/api'; // Replace with your API URL

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return(
    <div>
        <h1>API Data</h1>
 {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {data.map(item => (
                <Film key={item._id} film={item} />
           ))}
        </ul>
      )}
    </div>
  )



}
export default ApiDataDisplay;

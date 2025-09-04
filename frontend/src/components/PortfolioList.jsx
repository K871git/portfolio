import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PortfolioList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/portfolio-items`)
      .then(res => setItems(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      <Link to="/add">Add New</Link>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.project_url} target="_blank">View</a>
            <Link to={`/edit/${item.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function PortfolioForm() {
  const [data, setData] = useState({ title: '', description: '', image_url: '', project_url: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.REACT_APP_API_URL}/portfolio-items/${id}`)
        .then(res => setData(res.data))
        .catch(console.error);
    }
  }, [id]);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const req = id
      ? axios.put(`${process.env.REACT_APP_API_URL}/portfolio-items/${id}`, data)
      : axios.post(`${process.env.REACT_APP_API_URL}/portfolio-items`, data);

    req.then(() => navigate('/')).catch(console.error);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={data.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={data.description} onChange={handleChange} placeholder="Description" />
      <input name="image_url" value={data.image_url} onChange={handleChange} placeholder="Image URL" />
      <input name="project_url" value={data.project_url} onChange={handleChange} placeholder="Project URL" />
      <button type="submit">Save</button>
    </form>
  );
}

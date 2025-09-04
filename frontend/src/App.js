import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioList from './components/PortfolioList';
import PortfolioForm from './components/PortfolioForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioList />} />
        <Route path="/add" element={<PortfolioForm />} />
        <Route path="/edit/:id" element={<PortfolioForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

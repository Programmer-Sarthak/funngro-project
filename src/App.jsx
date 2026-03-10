import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CompanyPage from './pages/CompanyPage';
import TeenPage from './pages/TeenPage';

function App() {
  return (
    <Router>
      <div className="bg-[#050816] min-h-screen font-sans selection:bg-green-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<CompanyPage />} />
          <Route path="/teen" element={<TeenPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
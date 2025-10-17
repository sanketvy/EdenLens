import './App.css'
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReportPage from './pages/ReportPage';

function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/report/:id' element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

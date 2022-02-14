import './output.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './common/Layout.js';
import Home from './routes/home/Home.js';
import Login from './routes/login/Login.js';
import Register from './routes/register/Register';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

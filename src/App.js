import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import React from 'react'

//components
import Navbar from './components/pages/layout/Navbar'
import Foter from './components/pages/layout/Foter'
import Container from './components/pages/layout/Container'
import Message from './components/pages/layout/Message'

//pages
import Home from './components/pages/Home'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'

//context
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Foter />
      </UserProvider>
    </Router>
  );
}

export default App; 
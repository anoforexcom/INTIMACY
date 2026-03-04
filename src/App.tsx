import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Credits from './pages/Credits';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import GameRoom from './pages/GameRoom';

// Simple wrapper to ensure clean transitions
function RouteGuard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<RouteGuard><Home /></RouteGuard>} />
            <Route path="/login" element={<RouteGuard><Login /></RouteGuard>} />
            <Route path="/register" element={<RouteGuard><Register /></RouteGuard>} />
            <Route path="/dashboard" element={<RouteGuard><Dashboard /></RouteGuard>} />
            <Route path="/credits" element={<RouteGuard><Credits /></RouteGuard>} />
            <Route path="/packs" element={<RouteGuard><Home /></RouteGuard>} />
            <Route path="/faq" element={<RouteGuard><FAQ /></RouteGuard>} />
            <Route path="/testimonials" element={<RouteGuard><Testimonials /></RouteGuard>} />
            <Route path="/terms" element={<RouteGuard><Terms /></RouteGuard>} />
            <Route path="/privacy" element={<RouteGuard><Privacy /></RouteGuard>} />
            <Route path="/cookies" element={<RouteGuard><Cookies /></RouteGuard>} />
            <Route path="/game-room" element={<GameRoom />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;

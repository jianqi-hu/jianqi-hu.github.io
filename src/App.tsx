import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

import Publications from './components/Publications';
import Team from './components/Team';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Conference from './components/Conference';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
// 新增 Research 页面导入
import Research from './components/Research';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 新增 Research 路由 */}
          <Route path="/research" element={<Research />} />

          <Route path="/publications" element={<Publications />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/team" element={<Team />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
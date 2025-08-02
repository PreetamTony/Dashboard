import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const [activeMenu, setActiveMenu] = useState('home');
  const [hoveredMenu, setHoveredMenu] = useState('');
  const [hoveredSubmenu, setHoveredSubmenu] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="flex">
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          hoveredMenu={hoveredMenu}
          setHoveredMenu={setHoveredMenu}
          hoveredSubmenu={hoveredSubmenu}
          setHoveredSubmenu={setHoveredSubmenu}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className="ml-16 flex-1">
          <Dashboard darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
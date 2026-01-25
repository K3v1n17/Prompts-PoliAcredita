import { useState } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage-new';
import { ProductoSection } from './components/ProductoSection';
import { ReleaseSection } from './components/ReleaseSection';
import { SprintsSection } from './components/SprintsSection';
import { DefinicionesSection } from './components/DefinicionesSection';
import { Footer } from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage onNavigate={setCurrentSection} />;
      case 'producto':
        return <ProductoSection />;
      case 'release':
        return <ReleaseSection />;
      case 'sprints':
        return <SprintsSection />;
      case 'definiciones':
        return <DefinicionesSection />;
      default:
        return <HomePage onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

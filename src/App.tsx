import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Research from './components/Research';
import Publications from './components/Publications';
import Team from './components/Team';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <News />
        <Research />
        <Publications />
        <Team />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
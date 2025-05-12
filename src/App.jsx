import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Exphub.ir</div>
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => handleLinkClick(section)}
                className={`font-medium hover:text-indigo-600 transition-colors ${activeSection === section ? 'text-indigo-600' : ''}`}
              >
                {section === 'home' ? 'خانه' :
                 section === 'about' ? 'درباره ما' :
                 section === 'services' ? 'خدمات' :
                 section === 'projects' ? 'پروژه‌ها' : 'تماس با ما'}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {['home', 'about', 'services', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  type="button"
                  onClick={() => handleLinkClick(section)}
                  className={`block font-medium hover:text-indigo-600 ${activeSection === section ? 'text-indigo-600' : ''}`}
                >
                  {section === 'home' ? 'خانه' :
                   section === 'about' ? 'درباره ما' :
                   section === 'services' ? 'خدمات' :
                   section === 'projects' ? 'پروژه‌ها' : 'تماس با ما'}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        <section id="home" className="py-20 text-center bg-white">
          <h1 className="text-4xl font-bold mb-4">خوش آمدید</h1>
          <p className="text-gray-600">به سایت Exphub خوش آمدید</p>
        </section>
        <section id="about" className="py-20 text-center bg-gray-100">
          <h2 className="text-3xl font-semibold mb-4">درباره ما</h2>
          <p className="text-gray-600">توضیحاتی درباره شرکت و خدمات ما</p>
        </section>
        <section id="services" className="py-20 text-center bg-white">
          <h2 className="text-3xl font-semibold mb-4">خدمات ما</h2>
          <p className="text-gray-600">طراحی سایت، سئو و بیشتر</p>
        </section>
        <section id="projects" className="py-20 text-center bg-gray-100">
          <h2 className="text-3xl font-semibold mb-4">پروژه‌ها</h2>
          <p className="text-gray-600">نمونه‌هایی از پروژه‌های انجام شده</p>
        </section>
        <section id="contact" className="py-20 text-center bg-white">
          <h2 className="text-3xl font-semibold mb-4">تماس با ما</h2>
          <p className="text-gray-600">برای ارتباط با ما فرم زیر را پر کنید.</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 1403 Exphub.ir - تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}

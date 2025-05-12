import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data for projects and services
  const projects = [
    {
      title: "پروژه کیان",
      description: "توضیحات کوتاه در مورد پروژه اول و فناوری‌های استفاده شده.",
      image: "https://picsum.photos/seed/project1/400/300"
    },
    {
      title: "پروژه دوم",
      description: "توضیحات کوتاه در مورد پروژه دوم و فناوری‌های استفاده شده.",
      image: "https://picsum.photos/seed/project2/400/300"
    },
    {
      title: "پروژه سوم",
      description: "توضیحات کوتاه در مورد پروژه سوم و فناوری‌های استفاده شده.",
      image: "https://picsum.photos/seed/project3/400/300"
    }
  ];

  const services = [
    {
      title: "طراحی وب",
      description: "طراحی سایت حرفه‌ای با آخرین فناوری‌ها و رعایت استانداردهای روز دنیا."
    },
    {
      title: "برنامه نویسی",
      description: "توسعه برنامه‌های تحت وب با تکنولوژی‌های مدرن و بهینه‌سازی عملکرد."
    },
    {
      title: "سئو و بهینه سازی",
      description: "بهینه‌سازی سایت برای موتورهای جستجو و افزایش رتبه در گوگل."
    }
  ];

  const teamMembers = [
    {
      name: "علی محمدی",
      role: "توسعه دهنده فرانت اند",
      image: "https://picsum.photos/seed/team1/200/200"
    },
    {
      name: "سارا احمدی",
      role: "طراح UI/UX",
      image: "https://picsum.photos/seed/team2/200/200"
    },
    {
      name: "حسین علیزاده",
      role: "توسعه دهنده بک اند",
      image: "https://picsum.photos/seed/team3/200/200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header / Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Exphub.ir</div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <button 
              type="button" 
              onClick={() => setActiveSection('home')} 
              className={`font-medium hover:text-indigo-600 transition-colors ${activeSection === 'home' ? 'text-indigo-600' : ''}`}
            >
              خانه
            </button>
            <button 
              type="button" 
              onClick={() => setActiveSection('about')} 
              className={`font-medium hover:text-indigo-600 transition-colors ${activeSection === 'about' ? 'text-indigo-600' : ''}`}
            >
              درباره ما
            </button>
            <button 
              type="button" 
              onClick={() => setActiveSection('services')} 
              className={`font-medium hover:text-indigo-600 transition-colors ${activeSection === 'services' ? 'text-indigo-600' : ''}`}
            >
              خدمات
            </button>
            <button 
              type="button" 
              onClick={() => setActiveSection('projects')} 
              className={`font-medium hover:text-indigo-600 transition-colors ${activeSection === 'projects' ? 'text-indigo-600' : ''}`}
            >
              پروژه‌ها
            </button>
            <button 
              type="button" 
              onClick={() => setActiveSection('contact')} 
              className={`font-medium hover:text-indigo-600 transition-colors ${activeSection === 'contact' ? 'text-indigo-600' : ''}`}
            >
              تماس با ما
            </button>
          </nav>

          {/* Mobile menu button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <button 
                type="button" 
                onClick={() => {setActiveSection('home'); setIsMenuOpen(false);}} 
                className={`block font-medium hover:text-indigo-600 ${activeSection === 'home' ? 'text-indigo-600' : ''}`}
              >
                خانه
              </button>
              <button 
                type="button" 
                onClick={() => {setActiveSection('about'); setIsMenuOpen(false);}} 
                className={`block font-medium hover:text-indigo-600 ${activeSection === 'about' ? 'text-indigo-600' : ''}`}
              >
                درباره ما
              </button>
              <button 
                type="button" 
                onClick={() => {setActiveSection('services'); setIsMenuOpen(false);}} 
                className={`block font-medium hover:text-indigo-600 ${activeSection === 'services' ? 'text-indigo-600' : ''}`}
              >
                خدمات
              </button>
              <button 
                type="button" 
                onClick={() => {setActiveSection('projects'); setIsMenuOpen(false);}} 
                className={`block font-medium hover:text-indigo-600 ${activeSection === 'projects' ? 'text-indigo-600' : ''}`}
              >
                پروژه‌ها
              </button>
              <button 
                type="button" 
                onClick={() => {setActiveSection('contact'); setIsMenuOpen(false);}} 
                className={`block font-medium hover:text-indigo-600 ${activeSection === 'contact' ? 'text-indigo-600' : ''}`}
              >
                تماس با ما
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              بهترین خدمات طراحی و توسعه وب
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              ما با استفاده از آخرین فناوری‌ها، سایت‌های زیبا و کارآمدی ایجاد می‌کنیم که تجربه کاربری فوق العاده‌ای ارائه می‌دهند.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors transform hover:scale-105 inline-block">درخواست مشاوره</a>
              <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors transform hover:scale-105 inline-block">مشاهده پروژه‌ها</a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/hero/800/600" alt="Web Development" className="rounded-lg shadow-xl transform rotate-1 scale-100 hover:rotate-0 hover:scale-105 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">درباره ما</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              تیم متخصص Exphub با هدف ارائه خدمات طراحی و توسعه وب با کیفیت بالا تشکیل شده است. ما با استفاده از فناوری‌های روز دنیا، سایت‌هایی خلق می‌کنیم که نه تنها زیبا هستند بلکه عملکرد بی‌نظیری دارند.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">تجربه کاربری برجسته</h3>
              <p className="text-gray-600">
                طراحی‌های ما همیشه با تمرکز بر روی تجربه کاربری بهینه شده‌اند تا بازدیدکنندگان سایت شما را دوست داشته باشند.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">فناوری‌های مدرن</h3>
              <p className="text-gray-600">
                ما از آخرین ابزارها و فریمورک‌های موجود در صنعت توسعه وب استفاده می‌کنیم تا بهترین عملکرد ممکن را فراهم کنیم.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">کیفیت تضمین شده</h3>
              <p className="text-gray-600">
                تمامی پروژه‌های ما قبل از تحویل تست‌های دقیقی را پشت سر می‌گذارند تا اطمینان حاصل شود که همه چیز بدون مشکل کار می‌کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدمات ما</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              ما خدمات متنوعی در حوزه طراحی و توسعه وب ارائه می‌دهیم. هر آنچه برای حضور قوی در فضای مجازی نیاز دارید، در Exphub موجود است.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">آخرین پروژه‌ها</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              برخی از پروژه‌هایی که با عشق و دقت طراحی و توسعه داده‌ایم را مشاهده کنید.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <a href="#" className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-50 transition-colors">مشاهده جزئیات</a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">تیم ما</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              اعضای متخصص و خلاق ما همواره در تلاش هستند تا بهترین خدمات را ارائه دهند.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-indigo-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">تماس با ما</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              سوالی دارید؟ با ما تماس بگیرید یا درخواست خود را ارسال کنید. در اسرع وقت با شما تماس می‌گیریم.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">نام شما</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="نام خود را وارد کنید" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">ایمیل شما</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="ایمیل خود را وارد کنید" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">پیام شما</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="پیام خود را بنویسید..."></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  ارسال پیام
                </button>
              </form>
            </div>
            <div className="bg-indigo-600 text-white p-8 rounded-lg flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">اطلاعات تماس</h3>
              
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold">آدرس</h4>
                  <p>تهران، خیابان ولی عصر، پلاک 123</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold">تلفن</h4>
                  <p>۰۲۱-۱۲۳۴۵۶۷</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 110 4M5 19h14a2 2 0 110 4M5 19v-4a2 2 0 114 0v4M15 19h4a2 2 0 110 4h-4M5 23h14a2 2 0 110 4h-14a2 2 0 110-4z" />
                  </svg>
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold">ایمیل</h4>
                  <p>info@exphub.ir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Exphub.ir</h3>
              <p className="text-gray-400 mb-4">
                تیم متخصص طراحی و توسعه وب با هدف ارائه خدمات با کیفیت بالا در حوزه وب.
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.072 4.358.2 6.78 2.618 6.98 6.98.058 1.265.072 1.689.072 4.948 0 3.259-.014 3.668-.07 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-1.664-4.771-4.919-4.92-.059-1.265-.073-1.644-.073-4.849 0-3.204.014-3.668.072-4.947.196-4.354 1.664-4.771 4.919-6.98 1.265-.058 1.643-.07 4.849-.07 3.259 0 3.668.014 4.948.072 4.948.072 4.948-.001z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12a3 3 0 116 0 3 3 0 01-6 0z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">صفحات</h3>
              <ul className="space-y-2">
                <li><button type="button" onClick={() => setActiveSection('home')} className="text-gray-400 hover:text-white transition-colors">خانه</button></li>
                <li><button type="button" onClick={() => setActiveSection('about')} className="text-gray-400 hover:text-white transition-colors">درباره ما</button></li>
                <li><button type="button" onClick={() => setActiveSection('services')} className="text-gray-400 hover:text-white transition-colors">خدمات</button></li>
                <li><button type="button" onClick={() => setActiveSection('projects')} className="text-gray-400 hover:text-white transition-colors">پروژه‌ها</button></li>
                <li><button type="button" onClick={() => setActiveSection('contact')} className="text-gray-400 hover:text-white transition-colors">تماس با ما</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">خدمات</h3>
              <ul className="space-y-2">
                <li><button type="button" className="text-gray-400 hover:text-white transition-colors">طراحی وب</button></li>
                <li><button type="button" className="text-gray-400 hover:text-white transition-colors">برنامه نویسی</button></li>
                <li><button type="button" className="text-gray-400 hover:text-white transition-colors">سئو و بهینه سازی</button></li>
                <li><button type="button" className="text-gray-400 hover:text-white transition-colors">برنامه نویسی موبایل</button></li>
                <li><button type="button" className="text-gray-400 hover:text-white transition-colors">طراحی UI/UX</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">خبرنامه</h3>
              <p className="text-gray-400 mb-4">برای دریافت آخرین اخبار و پیشنهادات مشترک شوید.</p>
              <form className="flex">
                <input type="email" placeholder="ایمیل خود را وارد کنید" className="px-4 py-3 w-full rounded-l-lg focus:outline-none" />
                <button className="bg-indigo-600 text-white px-4 py-3 rounded-r-lg hover:bg-indigo-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 1403 Exphub.ir. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

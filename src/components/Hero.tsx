import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'a creative developer',
    'a problem solver',
    'a UI/UX enthusiast',
    'building digital experiences'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Jumael Hossain</span>
          </h1>
          <div className="h-12 md:h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-purple-300 font-light">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          Crafting beautiful, interactive web experiences with modern technologies.
          Let's build something amazing together.
        </p>

        <div className="flex gap-4 justify-center animate-fade-in-delay-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('toolkit')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 animate-bounce cursor-pointer hover:text-purple-300 transition-colors"
        aria-label="Scroll to toolkit"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;

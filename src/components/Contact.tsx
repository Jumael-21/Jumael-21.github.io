import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={28} />,
      url: 'https://github.com/Jumael-21',
      color: 'hover:text-slate-300',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={28} />,
      url: 'https://www.linkedin.com/in/jumael21/',
      color: 'hover:text-purple-400',
      description: 'Let\'s connect professionally'
    },
    {
      name: 'Email',
      icon: <Mail size={28} />,
      url: 'mailto:jumaelhossain21@outlook.com',
      color: 'hover:text-purple-400',
      description: 'Send me a message'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="h-32 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className={`text-slate-400 transition-colors duration-300 ${link.color}`}>
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1 flex items-center gap-2">
                      {link.name}
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 text-sm">{link.description}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </a>
          ))}
        </div>

        <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-slate-700">
          <div className="inline-flex items-center gap-2 text-purple-400 mb-4">
            <Mail size={24} />
            <span className="text-lg font-semibold">Send me an Email</span>
          </div>
          <p className="text-slate-300 mb-6">
            Drop me a line and I'll get back to you as soon as possible
          </p>
          <a
            href="mailto:jumaelhossain21@outlook.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Send Email
          </a>
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">© 2025 Jumael Hossain. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

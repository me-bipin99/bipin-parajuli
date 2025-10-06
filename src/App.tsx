import { useState, useEffect } from 'react';
import { Code, Server, Terminal, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <nav className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-500" />
              <span className="font-mono text-sm text-zinc-400">Bipin.exe</span>
            </div>
            <div className="flex gap-6">
              {['hero', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-mono transition-colors ${
                    activeSection === section
                      ? 'text-emerald-500'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {section === 'hero' ? 'home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl">
          <div className="mb-8">
            <p className="font-mono text-emerald-500 text-sm mb-4">// WARNING: Design skills not found</p>
            <h1 className="text-6xl font-bold mb-4">
              Hi, I'm <span className="text-emerald-500">Bipin Parajuli</span>
              <br />
              Learning <br /> Web development
            </h1>
            <p className="text-xl text-zinc-400 font-mono">
              {'>'} console.log("I promise the code works better than it looks")
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded border border-zinc-700">
              <Server className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-mono">Backend said ‘nah’</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded border border-zinc-700">
              <Code className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-mono">Frontend:crying in the corner {'{ ... }'}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-zinc-950">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-emerald-500 font-mono">//</span> About Me
          </h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Just a student messing around with React and learning the ropes.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
             learning React step by step, building small projects, breaking things, and fixing them again. Every bug is a lesson, and every little app I make feels like a win. Excited to keep experimenting 
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-zinc-800 p-4 rounded border border-zinc-700">
                <h3 className="font-mono text-emerald-500 mb-2">Strong Skills</h3>
                <ul className="text-sm text-zinc-400 space-y-1 font-mono">
                  <li>• Node.js / Express</li>
                  <li>• MongoDB</li>
                  <li>• RESTful APIs</li>
                  <li>• System Architecture</li>
                </ul>
              </div>
              <div className="bg-zinc-800 p-4 rounded border border-zinc-700">
                <h3 className="font-mono text-yellow-500 mb-2">Learning Skills</h3>
                <ul className="text-sm text-zinc-400 space-y-1 font-mono">
                  <li>• React / TypeScript</li>
                  <li>• CSS (still Googling)</li>
                  <li>• UI/UX (Wikipedia says...)</li>
                  <li>• Design Patterns (Trying not to mess it up)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-emerald-500 font-mono">//</span> Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-500">Freelance Content Writer</h3>
                  <p className="text-zinc-400 font-mono text-sm">Self-Employed</p>
                </div>
                <span className="text-sm text-zinc-500 font-mono">2021 - 2024</span>
              </div>
              <ul className="text-zinc-300 space-y-2">
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Crafted engaging blog posts, articles, and web content for diverse clients</li>
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Assisted students with assignments, essays, and project content</li>
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Researched topics thoroughly to ensure accuracy and originality</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-500">Junior Developer (Intern)</h3>
                  <p className="text-zinc-400 font-mono text-sm">DoerSoft PVT.LTD </p>
                </div>
                <span className="text-sm text-zinc-500 font-mono">FEB 2024 - AUG 2024 </span>
              </div>
              <ul className="text-zinc-300 space-y-2">
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Occasionally made buttons that actually work </li>
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Implemented authentication and authorization systems</li>
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Learned that 'margin' and 'padding' are not the same thing</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-500">Junior Developer</h3>
                  <p className="text-zinc-400 font-mono text-sm">IT park (KTM) </p>
                </div>
                <span className="text-sm text-zinc-500 font-mono">SEPT 2024 - Present</span>
              </div>
              <ul className="text-zinc-300 space-y-2">
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Developed backend systems for client projects</li>
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Reluctantly touched frontend code when necessary</li>
                <li className="flex gap-2"><span className="text-emerald-500">▹</span> Discovered Chrome DevTools is actually useful</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
{/*
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 bg-zinc-950">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-emerald-500 font-mono">//</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-emerald-500">API Gateway Service</h3>
                <ExternalLink  className="w-5 h-5 text-zinc-500" />
              </div>
              <p className="text-zinc-400 mb-4">
                High-performance API gateway with rate limiting, caching, and load balancing. Handles authentication for multiple microservices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Node.js</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Redis</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Docker</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-emerald-500">Real-time Analytics Engine</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500" />
              </div>
              <p className="text-zinc-400 mb-4">
                Stream processing system for real-time data analytics. Processes millions of events per hour with sub-second latency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Go</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Kafka</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">PostgreSQL</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-emerald-500">Distributed Task Queue</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500" />
              </div>
              <p className="text-zinc-400 mb-4">
                Scalable task queue system with priority scheduling, retry logic, and dead letter handling. Used across multiple production services.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Python</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">RabbitMQ</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">MongoDB</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-yellow-500">This Portfolio</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500" />
              </div>
              <p className="text-zinc-400 mb-4">
                A simple portfolio website. No fancy animations, no complex state management. Just honest frontend work from a backend dev.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-yellow-500">React</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-yellow-500">TypeScript</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-yellow-500">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </section>
*/}

<section id="projects" className="min-h-screen flex items-center justify-center px-6 bg-zinc-950">
  <div className="max-w-4xl w-full">
    <h2 className="text-4xl font-bold mb-8">
      <span className="text-emerald-500 font-mono">//</span> Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-emerald-500">Ming Food & Beverages</h3>
          <a href="https://ming-demo.netlify.app/" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 text-zinc-500" />
          </a>
        </div>
        <p className="text-zinc-400 mb-4">
          Bringing together fresh ingredients and bold flavors to create unforgettable meals.
Innovative dishes and handcrafted drinks served with quality and style.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">React </span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Typescript</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Tailwind</span>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-emerald-500">Drowsiness Detection System</h3>
          <a href="https://github.com/me-bipin99/DDS" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 text-zinc-500" />
          </a>
        </div>
        <p className="text-zinc-400 mb-4">
          An intelligent system that monitors driver alertness in real-time.
Detects signs of fatigue to prevent accidents and enhance safety.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Python</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Yolo & CNN</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">HTML</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">CSS</span>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-emerald-500">School Management System</h3>
          <a href="https://github.com/me-bipin99/sms_" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 text-zinc-500" />
          </a>
        </div>
        <p className="text-zinc-400 mb-4">
          A comprehensive platform to streamline student, staff, and academic management.
          Efficient, user-friendly, and designed to enhance school operations.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Php</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">HTML</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">CSS</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Mysql</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-emerald-500">Bootstrap</span>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-yellow-500">This Portfolio</h3>
          <a href="https://bipin-parajuli.netlify.app" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 text-zinc-500" />
          </a>
        </div>
        <p className="text-zinc-400 mb-4">
          A simple portfolio website. No fancy animations, no complex state management. Just honest work from a Junior dev.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-yellow-500">React</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-yellow-500">TypeScript</span>
          <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-yellow-500">Tailwind</span>
        </div>
      </div>

    </div>
  </div>
</section>







      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-emerald-500 font-mono">//</span> Get In Touch
          </h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <p className="text-lg text-zinc-300 mb-8">
              Looking for someone to build robust backend systems? Or maybe you need a frontend developer who won't over-engineer a button?
              Let's talk.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:parajuli.bipin99@gmail.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-emerald-500 transition-colors group"
              >
                <div className="bg-zinc-800 p-3 rounded border border-zinc-700 group-hover:border-emerald-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono">parajuli.bip99@gmail.com</span>
              </a>
              <a
                href="https://github.com/me-bipin99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-emerald-500 transition-colors group"
              >
                <div className="bg-zinc-800 p-3 rounded border border-zinc-700 group-hover:border-emerald-500 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="font-mono">github.com/me-bipin99</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bibin1256/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-emerald-500 transition-colors group"
              >
                <div className="bg-zinc-800 p-3 rounded border border-zinc-700 group-hover:border-emerald-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-mono">in/bibin1256/</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-sm text-zinc-500 font-mono text-center">
                © 2024 - Built with more console.logs than I'd like to admit
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

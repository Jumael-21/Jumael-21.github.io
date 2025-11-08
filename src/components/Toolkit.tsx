import { useState } from 'react';
import { Code2, Palette, Database, Zap, Layers, Cpu, Package, GitBranch } from 'lucide-react';

interface Tool {
  name: string;
  icon: JSX.Element;
  description: string;
  color: string;
}

const Toolkit = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const tools: Tool[] = [
    {
      name: 'React',
      icon: <Code2 size={40} />,
      description: '3+ years building dynamic UIs with React and modern hooks',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'TypeScript',
      icon: <Zap size={40} />,
      description: 'Type-safe development for scalable applications',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Tailwind CSS',
      icon: <Palette size={40} />,
      description: 'Crafting beautiful, responsive designs with utility-first CSS',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Node.js',
      icon: <Cpu size={40} />,
      description: 'Building robust backend services and APIs',
      color: 'from-fuchsia-400 to-purple-600'
    },
    {
      name: 'Database',
      icon: <Database size={40} />,
      description: 'PostgreSQL, MongoDB, and modern database solutions',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Next.js',
      icon: <Layers size={40} />,
      description: 'Full-stack React framework for production applications',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'npm/pnpm',
      icon: <Package size={40} />,
      description: 'Modern package management and workflow optimization',
      color: 'from-pink-400 to-purple-600'
    },
    {
      name: 'Git',
      icon: <GitBranch size={40} />,
      description: 'Version control and collaborative development',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="toolkit" className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="relative group"
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div className={`
                relative h-40 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6
                flex flex-col items-center justify-center
                border-2 border-slate-700
                transition-all duration-300 cursor-pointer
                ${hoveredTool === tool.name ? 'scale-110 border-purple-400 shadow-2xl' : 'hover:border-slate-600'}
              `}>
                <div className={`
                  text-slate-400 mb-3 transition-all duration-300
                  ${hoveredTool === tool.name ? `text-transparent bg-clip-text bg-gradient-to-r ${tool.color}` : ''}
                `}>
                  {tool.icon}
                </div>
                <h3 className="text-white font-semibold text-center">{tool.name}</h3>

                {hoveredTool === tool.name && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-400 p-6 flex items-center justify-center animate-fade-in z-10">
                    <p className="text-slate-300 text-sm text-center leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                )}
              </div>

              <div className={`
                absolute -inset-1 bg-gradient-to-r ${tool.color} rounded-2xl opacity-0 blur-xl
                transition-opacity duration-300 -z-10
                ${hoveredTool === tool.name ? 'opacity-30' : ''}
              `}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;

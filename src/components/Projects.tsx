import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  details: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with real-time inventory',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Built a full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features include real-time inventory updates, order tracking, and an admin dashboard.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative productivity tool for teams',
      tags: ['TypeScript', 'React', 'Supabase'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'A collaborative task management application with drag-and-drop functionality, real-time updates, team collaboration features, and customizable workflows. Supports multiple projects and team roles.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather forecasting interface',
      tags: ['React', 'API Integration', 'Charts'],
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Interactive weather dashboard featuring real-time weather data, 7-day forecasts, interactive maps, and historical weather trends with beautiful data visualizations.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Generator',
      description: 'AI-powered portfolio creation tool',
      tags: ['Next.js', 'AI', 'Tailwind'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'An innovative tool that helps developers create stunning portfolios using AI-generated content suggestions, customizable templates, and automatic deployment.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Track and analyze social media performance',
      tags: ['React', 'D3.js', 'REST API'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Comprehensive analytics platform for tracking social media metrics, engagement rates, audience insights, and campaign performance across multiple platforms.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Personal health and workout companion',
      tags: ['React Native', 'Firebase', 'Charts'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: 'Mobile-first fitness tracking application with workout plans, progress tracking, nutrition logging, and social features to connect with fitness enthusiasts.',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <>
      <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Showcasing my best work and creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 transition-all duration-500 hover:border-purple-400 hover:scale-105 hover:shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-90"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm text-purple-400 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      View Details
                    </div>
                  </div>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-400 shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm p-2 rounded-full text-white hover:bg-purple-400 hover:text-slate-900 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-700 text-purple-400 text-sm rounded-full border border-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-8">
                {selectedProject.details}
              </p>

              <div className="flex gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400 hover:text-slate-900 transition-all"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

import { getContentData } from '../../lib/posts';

export default function ProyectosPage() {
  const projects = getContentData('projects') as any[];
  const heroProjects = projects.length > 0 ? projects : [
    { id: '1', title: 'Conexión Rural', description: 'Mejoramos el acceso a Internet en comunidades rurales.' },
    { id: '2', title: 'Educación Digital', description: 'Capacitaciones en WebRTC para jóvenes y emprendedores.' },
    { id: '3', title: 'Salud Remota', description: 'Teleconsulta para pacientes en áreas con poca infraestructura.' },
  ];

  return (
    <div className='px-4 md:px-10 py-10'>
      <div className='rounded-lg p-8 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Nuestros proyectos de impacto</h1>
        <p className='text-lg mx-auto max-w-2xl'>Explora los proyectos que estamos ejecutando para impulsar la comunidad, la educación y la tecnología inclusiva.</p>

      </div>

      <div className='mt-8 flex flex-wrap justify-center gap-6'>
        {heroProjects.map((project) => (
          <article key={project.id} className='border rounded-xl p-5 bg-amber-100 hover:shadow-lg transition'>
            <h2 className='text-2xl font-semibold'>{project.title}</h2>
            <p className='mt-2 text-sm'>{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
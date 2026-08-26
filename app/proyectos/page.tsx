import { getContentData } from '../../lib/posts';

export default function ProyectosPage() {
  const projects = getContentData('projects') as any[];
  // Datos por defecto para proyectos
  const defaultProjects = [
    { id: '1', title: 'Conexión Rural', description: 'Mejoramos el acceso a Internet en comunidades rurales mediante tecnologías WebRTC.', thumbnail: 'https://www.redeszone.net/app/uploads-redeszone.net/2022/05/motivos-conexion-internet-lenta-1200x675.jpg' },
    { id: '2', title: 'Educación Digital', description: 'Capacitaciones en WebRTC para jóvenes y emprendedores locales.', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdVQZ0tx3s7zIHly2IYsfeBg7Qu95WfoVgw&s' },
    { id: '3', title: 'Salud Remota', description: 'Teleconsulta para pacientes en áreas con poca infraestructura médica.', thumbnail: 'https://careresource.org/wp-content/uploads/2022/09/Remote-Patient-Monitoring.jpg' },
    { id: '4', title: 'Inclusión Tecnológica', description: 'Proyectos para integrar a personas con discapacidad en el mundo digital.', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaQSIOShB0PRkfZQtxjtXDblSc7vsNIf9EQ&s' },
  ];

  const displayProjects = projects.length > 0 ? projects.slice(0, 4) : defaultProjects;

  
  return (
    <div className='px-4 md:px-10 py-10'>
      <div className='rounded-lg p-8 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Nuestros proyectos de impacto</h1>
        <p className='text-lg mx-auto max-w-2xl'>Explora los proyectos que estamos ejecutando para impulsar la comunidad, la educación y la tecnología inclusiva.</p>

      </div>

        <div className='flex flex-wrap justify-center mt-10 gap-4'>
          {displayProjects.map((project, index) => (
            <div key={project.id} className={`py-10 px-5 m-2  rounded-xl flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full max-w-4xl`}>
              <div className='flex-1'>
                <h1 className='text-xl font-bold lg:text-3xl '>{project.title}</h1>
                <p className='text-xl'>{project.description}</p>
              </div>
              <div className='flex-1'>
                <img src={project.thumbnail} alt={project.title} className="w-full h-auto object-cover rounded px-6" />
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
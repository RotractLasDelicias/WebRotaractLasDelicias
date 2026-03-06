import { getContentData } from '../lib/posts';

export default function Home() {
  const principalResources = getContentData('principalpageresources') as any[];
  const projects = getContentData('projects') as any[];
  const socios = getContentData('socios') as any[];

  // Ejemplo de datos si no hay contenido
  const heroData = principalResources.length > 0 ? principalResources[0] : { title: 'Bienvenidos a WebRTC Las Delicias', descripcion: 'Conectando comunidades a través de la tecnología.', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFqTAP5xEBaONLI9R5ps6jZAUPO6puy-l5A&s' };

  return (
    <div className=''>
      {/* Hero Section */}
      <div className='mx-10 relative h-96 bg-cover bg-center' style={{ backgroundImage: `url(${heroData.thumbnail})` }}>
        <div className='absolute bottom-4 left-4 text-white'>
          <h1 className="text-4xl font-bold">{heroData.title}</h1>
          <p className="mt-4">{heroData.descripcion}</p>
        </div>
      </div>

      {/* Proyectos Section */}
      <section className='flex flex-col justify-around mt-20 mx-10'>
        <div className='flex w-full justify-between px-20 items-center bg-amber-200'>
          <h1 className='text-2xl font-bold'>Nuestros Proyectos</h1>
          <h1>Ver todos los proyectos <a href="#" className="text-blue-500">#</a></h1>
        </div>

        <div className='flex flex-wrap justify-center mt-10 bg-amber-200 gap-4'>
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.id} className={`py-10 px-5 m-2 border rounded-xl bg-amber-400 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full max-w-4xl`}>
              <div className='flex-1'>
                <h1 className='text-xl font-bold'>{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <div className='flex-1'>
                {project.thumbnail ? <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover rounded" /> : <div className="w-full h-40 bg-gray-300 rounded flex items-center justify-center">Imagen</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Junta Directiva Section */}
      <section className='flex flex-col justify-around mt-20 mx-10'>
        <div className='flex w-full justify-between px-20 items-center bg-amber-200'>
          <h1 className='text-2xl font-bold'>Junta Directiva </h1>
          <h1>Ver a todos los Colaboradores <a href="#" className="text-blue-500">#</a></h1>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-wrap justify-center gap-4'>
            {socios.filter(socio => socio.role !== 'Miembro').map(socio => (
              <div key={socio.id} className='py-20 px-10 m-2 border rounded-xl relative bg-cover bg-center' style={socio.image ? { backgroundImage: `url(${socio.image})` } : { backgroundColor: '#fbbf24' }}>
                <div className='absolute bottom-4 left-4 text-white'>
                  <h1 className='text-lg font-bold'>{socio.name}</h1>
                  <p>{socio.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section className='flex flex-col justify-around mt-20 bg-[#d41367] p-10'>
        <div className='flex flex-col lg:flex-row justify-center gap-10'>
          <div className='py-10 px-10 w-full lg:w-1/2 max-w-xl rounded-xl text-white'>
            <h1 className='w-full text-2xl font-bold'>Contáctanos</h1>
            <p className="mt-4">¿Tienes dudas, quieres colaborar o simplemente decir hola? Nuestro equipo de liderazgo está listo para escucharte.</p>
            <div className=" flex flex-col gap-4 mt-4">
              <a href="#" className="text-blue-500 mr-4">Facebook</a>
              {/*<a href="#" className="text-blue-500 mr-4">Twitter</a>*/}
              <a href="#" className="text-blue-500">Instagram</a>
            </div>
          </div>
          <div className='py-10 px-10 w-full lg:w-1/2 max-w-xl rounded-xl bg-white'>
            <form className='flex flex-col'>
              <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                <input type="text" placeholder="Nombre" className="flex-1 p-2 border rounded border-gray-300" />
                <input type="email" placeholder="Correo" className="flex-1 p-2 border rounded border-gray-300" />
              </div>
              <textarea placeholder="Mensaje" className="mb-4 p-2 border rounded h-24 border-gray-300"></textarea>
              <button type="submit" className="bg-[#d41367] text-white py-2 px-4 rounded hover:bg-[#b01055]">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
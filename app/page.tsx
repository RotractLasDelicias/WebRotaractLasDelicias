import Image from 'next/image';
import { getContentData } from '../lib/posts';
import {Faqs} from '../components/Faqs';
import EventCalendar from '../components/eventCalendar';
import rotaractlogo from '../public/RotaractLogo_ES21.png';
import AnimatedCounter  from '../components/AnimatedCounter';
import ProximosPlanes from '../components/ProximosPlanes';
import JuntaComite from '../components/JuntaComite';
import Unetenos from '@/components/Unetenos';
import Contactanos from '@/components/Contactanos';
import Proyectos from '@/components/Proyectos';
import ProyectosDark from '@/components/Proyectos';
import InstagramSection from '@/components/InstagramSection';

//import {ppccolor, ptecolor, ashcolor, smicolor, aebcolor, deccolor, mcolor} from '..public/areasDeInteres'

const areadInteres = [
  { name: 'ppc', src: '/areasDeInteres/ppccolor.png' },
  { name: 'pte', src: '/areasDeInteres/ptecolor.png' },
  { name: 'ash', src: '/areasDeInteres/ashcolor.png' },
  { name: 'smi', src: '/areasDeInteres/smicolor.png' },
  { name: 'aeb', src: '/areasDeInteres/aebcolor.png' },
  { name: 'dec', src: '/areasDeInteres/deccolor.png' },
  { name: 'm', src: '/areasDeInteres/mcolor.png' },
];


// 1. defines los datos estáticos (simulando tu información)
const planesEstaticos = [
  {
    id: 1,
    title: 'Jornada de Reforestación',
    description: 'Siembra de árboles comunitarios en el parque local para promover la preservación del medio ambiente.',
    date: '15 de Septiembre',
    category: 'Medio Ambiente',
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Taller de Liderazgo Juvenil',
    description: 'Capacitación interactiva enfocada en habilidades blandas, trabajo en equipo y gestión de proyectos.',
    date: '28 de Septiembre',
    category: 'Desarrollo Profesional',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Colecta de Juguetes y Alimentos',
    description: 'Recaudación de insumos para llevar alegría y sustento a las comunidades más vulnerables.',
    date: '10 de Octubre',
    category: 'Servicio Comunitario',
    thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
  },
  //{
  //  id: 4,
  //  title: 'Charla sobre Salud Mental',
  //  description: 'Espacio de concientización y herramientas de apoyo guiado por profesionales de la salud.',
  //  date: '22 de Octubre',
  //  category: 'Salud',
  //  thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  //},
];

export default function Home() {
  const principalResources = getContentData('principalpageresources') as any[];
  const projects = getContentData('projects') as any[];


  const heroData = principalResources.length > 0 ? principalResources[0] : {
    title: 'Bienvenidos a WebRTC Las Delicias',
    descripcion: 'Conectando comunidades a través de la tecnología.',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFqTAP5xEBaONLI9R5ps6jZAUPO6puy-l5A&s',
  };

  // Datos por defecto para proyectos
  const defaultProjects = [
    { id: '1', title: 'Conexión Rural', description: 'Mejoramos el acceso a Internet en comunidades rurales mediante tecnologías WebRTC.', thumbnail: 'https://www.redeszone.net/app/uploads-redeszone.net/2022/05/motivos-conexion-internet-lenta-1200x675.jpg' },
    { id: '2', title: 'Educación Digital', description: 'Capacitaciones en WebRTC para jóvenes y emprendedores locales.', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdVQZ0tx3s7zIHly2IYsfeBg7Qu95WfoVgw&s' },
    { id: '3', title: 'Salud Remota', description: 'Teleconsulta para pacientes en áreas con poca infraestructura médica.', thumbnail: 'https://careresource.org/wp-content/uploads/2022/09/Remote-Patient-Monitoring.jpg' },
    //{ id: '4', title: 'Inclusión Tecnológica', description: 'Proyectos para integrar a personas con discapacidad en el mundo digital.', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaQSIOShB0PRkfZQtxjtXDblSc7vsNIf9EQ&s' },
  ];



  const displayProjects = projects.length > 0 ? projects.slice(0, 4) : defaultProjects;


  return (
    <div className=''>
      {/* Hero Section */}
      <section
        className='relative w-full h-[65vh] sm:h-[75vh] md:h-[80vh] lg:h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${heroData.thumbnail})` }}
      >
        {/* Overlay oscuro para legibilidad */}
        <div className='absolute inset-0 bg-black/50' />

        {/* Contenido alineado verticalmente */}
        <div className='absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-14 lg:px-20 max-w-7xl mx-auto text-white'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight drop-shadow-md'>
            {heroData.title}
          </h1>
          <p className='mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl md:max-w-2xl text-gray-100 leading-relaxed drop-shadow'>
            {heroData.descripcion}
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 px-6 sm:px-10 md:px-12 my-16 md:my-24 max-w-7xl mx-auto">
        
        {/* Lado Izquierdo: Contenido de Texto */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Quiénes somos
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-none">
            Rotaract Las Delicias es una organización juvenil que se dedica a promover el servicio comunitario y el desarrollo personal a través de actividades y proyectos innovadores.
          </p>
        </div>

        {/* Lado Derecho: Imagen centrada */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={rotaractlogo}
            alt="Logo de Rotaract Las Delicias"
            width={280}
            height={200}
            className="object-contain w-48 sm:w-64 md:w-72 lg:w-[280px] h-auto"
          />
        </div>

      </section>

      <section className='px-4 pt-20 md:px-10 mb-16 pt-20 my-16 md:my-28 p-4 md:p-10 text-center max-w-5xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight'>
          Áreas de interés
        </h2>
        <p className='mt-4 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto text-gray-600 leading-relaxed'>
          Lorem ipsum dolor sit amet.
        </p>

        {/* Grid / Flex responsivo para las imágenes */}
        <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8 md:mt-12 px-2 sm:px-4'>
          {areadInteres.map((area) => (
            <Image
              key={area.name}
              src={area.src}
              alt={`Color ${area.name}`}
              width={190}
              height={30}
              /* 
                w-28 (112px en móvil) -> sm:w-36 (144px) -> md:w-[190px] (tamaño original en desktop).
                h-auto mantiene la relación de aspecto sin distorsionar.
              */
              className="object-contain w-22 sm:w-30 md:w-[190px] h-auto transition-transform hover:scale-105"
            />
          ))}
        </div>
      </section>

      

      {/* Proyectos Section */}
      <ProyectosDark isHomePage={true}  />



      {/* Junta Directiva Section 
      <section className='px-4 md:px-10 my-16'>
        <div className='flex flex-col md: justify-between items-center rounded-lg p-4 p-6'>
          <h2 className='text-4xl font-bold text-center md: text-6xl w-full w-auto pb-10'>Junta Directiva</h2>
          <a href='/contribuyentes' className='text-black font-bold underline'>Ver a todos los colaboradores</a>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-wrap justify-center gap-4'>
            {displayLeadership.map(socio => (
              <div key={socio.id} className='py-20 px-10 m-2 border rounded-xl relative bg-cover bg-center' style={{ backgroundImage: `url(${socio.image})` }}>
                <div className='absolute bottom-4 left-4 text-white'>
                  <h1 className='text-lg font-bold'>{socio.name}</h1>
                  <p>{socio.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      <JuntaComite />

      <AnimatedCounter />



            


      {/*<div className='px-4 md:px-10 my-16 text-center'>
        <h1 className='text-5xl font-bold'>Nuestros proximos planes</h1>
      </div>*/}


      {/*<div className='px-4 md:px-10 my-16 flex justify-center items-center'>
        <EventCalendar 
          eventsData={[
            {
              id: '1',
              title: 'Reunión General del Club',
              startDate: '2026-08-25',
              endDate: '2026-08-25',
              description: 'Planificación de actividades del mes.',
              location: 'Aula 3 - UNERG'
            },
            {
              id: '2',
              title: 'Jornada Social / Proyecto',
              startDate: '2026-08-28',
              endDate: '2026-08-31', // Al abarcar varios días se rayará en el calendario
              description: 'Actividad comunitaria de fin de semana.',
              location: 'Cancha Central'
            }
          ]} 
        />
      </div>*/}


      <ProximosPlanes planes={planesEstaticos} />



      {/* Sección de Preguntas Frecuentes */}
      <section className='px-4 md:px-10 my-16 md:my-24 max-w-5xl mx-auto'>
        {/* Encabezado */}
        <div className='flex flex-col items-center text-center mb-10 md:mb-14'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight'>
            Preguntas Frecuentes
          </h2>
          <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed'>
            Encuentra respuestas a las dudas más comunes sobre nuestro club, membresía y actividades.
          </p>
        </div>

        {/* Acordeón Faqs */}
        <div className='w-full'>
          <Faqs />
        </div>
      </section>

      <Unetenos/>

      {/*<InstagramSection/>*/}
      

      <Contactanos/>
 
    </div>
  );
}
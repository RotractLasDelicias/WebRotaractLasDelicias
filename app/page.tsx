import { getSortedPostsData } from '../lib/posts';

/*export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Mi Blog con Decap CMS</h1>
      <hr />
      <ul>
        {allPosts.map(({ id, title }) => (
          <li key={id} style={{ marginBottom: '1rem' }}>
            <strong>{title}</strong>
            <br />
            <small>ID del archivo: {id}</small>
          </li>
        ))}
      </ul>
    </main>
  );
} */

export default function Home() {
  return (

    <div className=''>
      <div className=' mx-10 flex flex-col h-1/2 px-10 pt-80 pb-20 bg-amber-200'>
        <div className='flex flex-col'>
          <h1 className=" text-4xl font-bold">Titulo Hero</h1>
          <p className="mt-4">Contenido referente al titulo</p>
        </div>  
      </div>

      <div className=' flex flex-col justify-around  mt-20 mx-20 '>
        <div className='flex w-full justify-between px-20 items-center bg-amber-200'>
          <h1 className='text-2xl font-bold'>Nuestros Proyectos</h1>
          <h1>Ver todos los proyectos</h1>
        </div>

        <div className='flex justify-center mt-20 bg-amber-200'>
          <div className=' py-40 px-50 m-5 border rounded-xl bg-amber-400'>
            <h1>
              imagen
            </h1>
          </div>
          <div className=' py-40 px-20 m-5 border rounded-xl bg-amber-400'>
            <h1>
              Titulo del Proyecto
            </h1>
            <p>
              algo de contexto referente al proyecto
            </p>
          </div>
        </div>

        <div className='flex justify-center mt-20 bg-amber-200'>
          <div className=' py-40 px-20 m-5 border rounded-xl bg-amber-400'>
            <h1>
              Titulo del Proyecto
            </h1>
            <p>
              algo de contexto referente al proyecto
            </p>
          </div>          
          <div className=' py-40 px-50 m-5 border rounded-xl bg-amber-400'>
            <h1>
              imagen
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}
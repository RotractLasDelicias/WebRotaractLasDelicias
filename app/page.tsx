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

    /*div principal*/
    <div className=''>
      
      <div className=' mx-10 flex flex-col h-1/2 px-10 pt-80 pb-20 bg-amber-200'>
        <div className='flex flex-col'>
          <h1 className=" text-4xl font-bold">Titulo Hero</h1>
          <p className="mt-4">Contenido referente al titulo</p>
        </div>  
      </div>
    
    
      <section className=' flex flex-col justify-around  mt-20 mx-10 '>
        <div className='flex w-full justify-between px-20 items-center bg-amber-200'>
          <h1 className='text-2xl font-bold'>Nuestros Proyectos</h1>
          <h1>Ver todos los proyectos</h1>
        </div>

        <div className='flex justify-center mt-10 bg-amber-200'>
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

        <div className='flex justify-center mt-10 bg-amber-200'>
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

      </section>

      <section className=' flex flex-col justify-around  mt-20 mx-10'>
       <div className='flex w-full justify-between px-20 items-center bg-amber-200'>
          <h1 className='text-2xl font-bold'>Junta Directiva</h1>
          <h1>Ver a todos los Colaboradores</h1>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row justify-center'>
            <div className='py-40 px-30 m-5 border rounded-xl bg-amber-400'>
              <h1>Presidente</h1>
            </div>
            <div className='py-40 px-30 m-5 border rounded-xl bg-amber-400'>
              <h1>Vicepresidente</h1>
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <div className='py-40 px-30 m-5 border rounded-xl bg-amber-400'>
              <h1>Secretario/a</h1>
            </div>
            <div className='py-40 px-30 m-5 border rounded-xl bg-amber-400'>  
              <h1>Tesorero</h1>
            </div>
            <div className='py-40 px-30 m-5 border rounded-xl bg-amber-400'>
              <h1>Macero</h1>
            </div>            
          </div>
        </div>
      </section>

      <section className=' flex flex-col justify-around  mt-20  bg-[#d41367]'>
        <div className='flex flex-row justify-center  gap-10'>
          <div className='py-30 px-30 my-10 w-fit h-fit max-w-xl border rounded-xl bg-amber-200'>
            <h1 className='w-full text-2xl font-bold'>Contactanos</h1>
            <p className="line-clamp-3 break-words" >¿Tienes dudas, quieres colaborar o simplemente decir hola?
            Nuestro equipo de liderazgo está listo para escucharte.</p>
          </div>
          <div className='py-40 px-30 my-10 max-w-xl border rounded-xl bg-amber-200'>

          </div>
        </div>
      </section>

      <div className="w-fit h-fit max-w-xl border-2 border-blue-500 overflow-hidden rounded-lg">
  
        <img 
          src="data:image/jpeg;base64,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" 
          className="w-full h-full object-cover" 
          alt="Imagen que llena los bordes"
        />

        <div className	="p-2 w-full">
          <h2 className="font-bold text-xl w-full">Título que ocupa el ancho</h2>
          <p className="text-justify text-sm text-gray-600">
            Este texto se ajustará automáticamente. Gracias a 'text-justify' y al 'w-full', 
            sentirás que el contenido aprovecha cada milímetro del contenedor hasta 
            llegar al límite del padding.
          </p>
        </div>
      </div>
        
    </div>
  );
}
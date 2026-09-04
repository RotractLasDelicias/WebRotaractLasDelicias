import Contactanos from '@/components/Contactanos';
import { getContentData } from '../../lib/posts';
import JuntaComite from '@/components/JuntaComite';

export default function ContribuyentesPage() {


  return (

    <div className='bg-white min-h-screen'>

      {/* 1. SECCIÓN: QUIÉNES SOMOS */}
      <section className='px-4 pt-16 md:px-10 max-w-7xl mx-auto text-center'>
        <span className='inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d41367] bg-[#d41367]/10 px-4 py-1.5 rounded-full mb-4'>
          Sobre Nosotros
        </span>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6'>
          ¿Quiénes Somos?
        </h1>
        <div className='max-w-4xl mx-auto text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed space-y-6 text-justify sm:text-center'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          </p>
        </div>
      </section>

      {/* 2. SECCIÓN: MISIÓN, VISIÓN Y OBJETIVOS */}
      <section className='px-4 py-16 md:px-10 max-w-7xl mx-auto'>
        {/* MISIÓN Y VISIÓN (Formato Rectangular Vertical / Stacking) */}
        <div className='flex flex-col gap-8 mb-12'>
          {/* Misión */}
          <div className='w-full bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute top-0 left-0 w-2 h-full bg-[#d41367]' />
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block text-xs font-bold uppercase tracking-wider text-[#d41367] bg-[#d41367]/10 px-3 py-1 rounded-full'>
                Propósito
              </span>
            </div>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4'>
              Nuestra Misión
            </h2>
            <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>

          {/* Visión */}
          <div className='w-full bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'>
            <div className='absolute top-0 left-0 w-2 h-full bg-gray-900 group-hover:bg-[#d41367] transition-colors duration-300' />
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block text-xs font-bold uppercase tracking-wider text-gray-900 bg-gray-100 px-3 py-1 rounded-full'>
                Futuro
              </span>
            </div>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4'>
              Nuestra Visión
            </h2>
            <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
            </p>
          </div>
        </div>

        {/* OBJETIVOS ESTRATÉGICOS (4 Cuadrados Ajustables Horizontalmente) */}
        <div className='mt-16'>
          <div className='text-center mb-10'>
            <h3 className='text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight'>
              Objetivos Estratégicos
            </h3>
            <p className='text-gray-600 mt-2 text-base sm:text-lg'>
              Las metas clave que guían cada una de nuestras iniciativas.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
            {/* Objetivo 1 */}
            <div className='bg-white aspect-square rounded-2xl border border-gray-100 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
              <span className='text-4xl font-black text-[#d41367]/20 group-hover:text-[#d41367] transition-colors'>
                01
              </span>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Desarrollo Comunitario
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Objetivo 2 */}
            <div className='bg-white aspect-square rounded-2xl border border-gray-100 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
              <span className='text-4xl font-black text-[#d41367]/20 group-hover:text-[#d41367] transition-colors'>
                02
              </span>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Formación de Liderazgo
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-5'>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Objetivo 3 */}
            <div className='bg-white aspect-square rounded-2xl border border-gray-100 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
              <span className='text-4xl font-black text-[#d41367]/20 group-hover:text-[#d41367] transition-colors'>
                03
              </span>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Innovación Social
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-5'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            {/* Objetivo 4 */}
            <div className='bg-white aspect-square rounded-2xl border border-gray-100 shadow-xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
              <span className='text-4xl font-black text-[#d41367]/20 group-hover:text-[#d41367] transition-colors'>
                04
              </span>
              <div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Alianzas Sostenibles
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-5'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN: JUNTA Y COMITÉS */}
      <div className='pb-10'>
        <JuntaComite juntaOComite="comite" />
      </div>
      {/*<div className=' rounded-lg p-8 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Contribuyentes y liderazgo</h1>
        <p className='text-lg mx-auto max-w-2xl'>Conoce a nuestro equipo principal y al conjunto de miembros que aportan día a día al proyecto.</p>
        <a href='/contribuyentes' className='text-black font-semibold underline mt-4 inline-block'>Ver contribuyentes</a>
      </div>

      <div className='mt-8'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>Junta Directiva (lineal)</h2>
        <div className='flex flex-wrap gap-4 justify-center mb-10'>
          {liderazgo.length > 0
            ? liderazgo.map((socio) => (
                <div key={socio.id} className='w-full sm:w-1/2 md:w-1/3 p-4 border rounded-lg bg-white'>
                  <p className='text-center font-bold'>{socio.name}</p>
                  <p className='text-center text-sm text-gray-600'>{socio.role}</p>
                </div>
              ))
            : [
                { id: '1', name: 'Presidente', role: 'Liderazgo' },
                { id: '2', name: 'Coordinador', role: 'Liderazgo' },
              ].map((item) => (
                <div key={item.id} className='w-full sm:w-1/2 md:w-1/3 p-4 border rounded-lg bg-white'>
                  <p className='text-center font-bold'>{item.name}</p>
                  <p className='text-center text-sm text-gray-600'>{item.role}</p>
                </div>
              ))}
        </div>

        <div className='pt-6 border-t border-gray-200'>
          <h3 className='text-xl font-bold mb-3 text-center'>Miembros sin cargo específico</h3>
          <div className='flex flex-wrap justify-center gap-4 min-h-[200px] min-w-[200px]'>
            {(miembrosGenerales.length > 0 ? miembrosGenerales : [{ id: 'm1', name: 'Miembro A' }, { id: 'm2', name: 'Miembro B' }, { id: 'm3', name: 'Miembro C' }, { id: 'm4', name: 'Miembro D' }, { id: 'm5', name: 'Miembro E' }]).map((socio) => (
              <div key={socio.id} className='p-3 border rounded-md bg-amber-100 text-sm text-center'>
                <p className='font-semibold'>{socio.name}</p>
                <p className='text-gray-600'>{socio.role || 'Miembro general'}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-wrap justify-center gap-4'>
            {displayLeadership.map(socio => (
              <div key={socio.id} className='py-30 px-20 m-2 border rounded-xl relative bg-cover bg-center' style={{ backgroundImage: `url(${socio.image})` }}>
                <div className='absolute bottom-4 left-4 text-white'>
                  <h1 className='text-lg font-bold'>{socio.name}</h1>
                  <p>{socio.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>*/}
      {/* 3. SECCIÓN: CONTACTANOS */}
      <div className='pb-10'>
        <Contactanos />
      </div>
    </div>
  );
}
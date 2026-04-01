import { getContentData } from '../../lib/posts';

export default function ContribuyentesPage() {
  const socios = getContentData('socios') as any[];

  const liderazgo = socios.filter((socio) => socio.role && socio.role !== 'Miembro');
  const miembrosGenerales = socios.filter((socio) => !socio.role || socio.role === 'Miembro');

  return (
    <div className='px-4 md:px-10 py-10'>
      <div className=' rounded-lg p-8 text-center'>
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {(miembrosGenerales.length > 0 ? miembrosGenerales : [{ id: 'm1', name: 'Miembro A' }, { id: 'm2', name: 'Miembro B' }, { id: 'm3', name: 'Miembro C' }]).map((socio) => (
              <div key={socio.id} className='p-3 border rounded-md bg-amber-100 text-sm text-center'>
                <p className='font-semibold'>{socio.name}</p>
                <p className='text-gray-600'>{socio.role || 'Miembro general'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
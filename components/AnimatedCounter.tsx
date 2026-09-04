import { Counter } from '../components/Counter';

export default function AnimatedCounter() {
    return (
        <section className='my-12 pb-20 md:my-20 px-4 md:px-10 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch'>
            
            {/* Tarjeta 1 */}
            <div className='flex flex-col items-center justify-center bg-[#d41367] text-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-shadow py-8 md:py-10 px-6 text-center border border-white/10'>
              <span className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-1'>
                <Counter end={200} suffix='+' />
              </span>
              <p className='text-base sm:text-lg lg:text-xl font-medium text-white/90 capitalize tracking-wide'>
                Beneficiados
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className='flex flex-col items-center justify-center bg-[#d41367] text-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-shadow py-8 md:py-10 px-6 text-center border border-white/10'>
              <span className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-1'>
                <Counter end={20} />
              </span>
              <p className='text-base sm:text-lg lg:text-xl font-medium text-white/90 capitalize tracking-wide'>
                Socios activos
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className='flex flex-col items-center justify-center bg-[#d41367] text-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-shadow py-8 md:py-10 px-6 text-center border border-white/10'>
              <span className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-1'>
                <Counter end={10} suffix='+' />
              </span>
              <p className='text-base sm:text-lg lg:text-xl font-medium text-white/90 capitalize tracking-wide'>
                Proyectos realizados
              </p>
            </div>

          </div>
        </section>
    );
};
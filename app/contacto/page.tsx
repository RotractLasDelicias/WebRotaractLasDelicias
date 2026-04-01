export default function ContactoPage() {
  return (
    <div className='px-4 md:px-10 py-10'>
      <h1 className='text-4xl font-bold mb-4'>Ponte en contacto</h1>
      <p className='text-lg mb-8'>Estamos aquí para apoyarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='bg-white p-6 rounded-xl shadow-md'>
          <form className='space-y-4'>
            <div>
              <label htmlFor='nombre' className='block text-sm font-medium text-gray-700'>Nombre</label>
              <input id='nombre' type='text' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d41367] focus:ring-[#d41367]' placeholder='Tu nombre' />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Correo</label>
              <input id='email' type='email' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d41367] focus:ring-[#d41367]' placeholder='tucorreo@dominio.com' />
            </div>
            <div>
              <label htmlFor='mensaje' className='block text-sm font-medium text-gray-700'>Mensaje</label>
              <textarea id='mensaje' rows={5} className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d41367] focus:ring-[#d41367]' placeholder='Escribe tu mensaje aquí' />
            </div>
            <button type='submit' className='w-full py-3 bg-[#d41367] text-white font-semibold rounded-md hover:bg-[#b01055]'>Enviar</button>
          </form>
        </div>

        <div className='bg-[#d41367] text-white p-6 rounded-xl'>
          <h2 className='text-2xl font-bold mb-3'>Nuestros datos</h2>
          <p>Teléfono: +52 123 456 789</p>
          <p>Email: info@webrtc-las-delicias.org</p>
          <p className='mt-4'>Nuestros colores están inspirados en la marca: fucsia para acción y amarillo para energía comunitaria.</p>
        </div>
      </div>
    </div>
  );
}
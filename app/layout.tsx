import './globals.css'; // Importante para que Tailwind funcione
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Providers } from './providers';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          
          {/* El 'flex-grow' hace que el contenido ocupe el espacio y el footer baje */}
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}

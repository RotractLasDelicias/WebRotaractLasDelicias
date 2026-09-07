import './globals.css'; // Importante para que Tailwind funcione
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Providers } from './providers';
import ScrollToTop from '../components/ScrollToTop';


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
          <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
          
          {/* El 'flex-grow' hace que el contenido ocupe el espacio y el footer baje */}
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </Providers>
        <ScrollToTop />
      </body>
    </html>
  );
}

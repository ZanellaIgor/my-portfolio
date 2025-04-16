import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ScrollToTop } from '../components/scroll-to-top';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Footer />
      <ScrollToTop />
    </main>
  );
}

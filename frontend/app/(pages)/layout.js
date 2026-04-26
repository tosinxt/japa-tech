import { SimpleHeader } from "../components/ui/simple-header";
import Footer from "../components/Footer";

export default function PageLayout({ children }) {
  return (
    <div>
      <SimpleHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

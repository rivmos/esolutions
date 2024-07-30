import Header from "@/app/ui/web/Header";
import Footer from "@/app/ui/web/Footer";
import Newsletter from "./home/components/Newsletter";

export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <div>{children}</div>
      <Newsletter />
      <Footer />
    </>
  );
}
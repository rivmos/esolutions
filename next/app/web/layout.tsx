import Header from "@/app/ui/web/Header";
import Footer from "@/app/ui/web/Footer";

export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
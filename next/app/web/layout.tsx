import Header from "@/app/ui/web/Header";
import Footer from "@/app/ui/web/Footer";
import { getCurrentUser } from "../actions/getCurrentUser";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const currentUser = await getCurrentUser()

  return (
    <>
      <Header />
      {JSON.stringify(currentUser)}
      <div>{children}</div>
      <Footer />
    </>
  );
}
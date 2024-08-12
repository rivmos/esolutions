import Banner from "@/app/ui/web/Banner";
import CaseStudies from "../home/components/CaseStudies";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <CaseStudies />
    </>
  );
}
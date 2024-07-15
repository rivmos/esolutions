import CaseStudies from "../home/components/CaseStudies";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <CaseStudies />
    </>
  );
}
import Banner from "@/app/ui/web/Banner";
import CaseStudies from "../home/components/CaseStudies";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner title='Services' isShort bannerImage='/img/banner/laptop-bg.png' bannerImageAlt='Services Banner Image' />
      <div>{children}</div>
      {/* <CaseStudies /> */}
    </>
  );
}
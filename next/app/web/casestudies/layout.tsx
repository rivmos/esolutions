import Banner from "@/app/ui/web/Banner";
export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Banner title='Case Studies' isShort bannerImage='/img/banner/casestudies-bg.png' bannerImageAlt='Case Studies Banner Image'/>
      <div>{children}</div>
    </>
  );
}
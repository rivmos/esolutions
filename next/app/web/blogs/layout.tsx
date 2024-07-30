import Banner from "@/app/ui/web/Banner";
export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Banner title='Blogs' isShort bannerImage='/img/banner/laptop-bg.png' bannerImageAlt='Blogs Banner Image'/>
      <div>{children}</div>
    </>
  );
}
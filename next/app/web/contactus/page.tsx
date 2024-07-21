import Banner from "@/app/ui/web/Banner";
import Image from "next/image";

export default function Page() {
  return (
    <main>
       <Banner title='Contact Us' isShort bannerImage='/img/banner/laptop-bg.png' bannerImageAlt='Contact Us Banner Image' />
    </main>
  );
}

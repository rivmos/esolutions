import Banner from "@/app/ui/web/Banner";
import Image from "next/image";

export default function Page() {
  return (
    <>
       <Banner title='Portfolio' isShort bannerImage='/img/banner/laptop-bg.png' bannerImageAlt='Portfolio Banner Image' />
    </>
  );
}

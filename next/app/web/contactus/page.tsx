import Banner from "@/app/ui/web/Banner";
import { MdOutlinePhone, MdOutlineAttachEmail } from "react-icons/md";
import ContactUsForm from "./contactus-form";

export default function Page() {
  return (
    <main>
      <Banner title='Contact Us' isShort bannerImage='/img/banner/contactus-bg1.png' bannerImageAlt='Contact Us Banner Image' />

      <div className="py-12 md:py-16 lg:py-20">

        <div className="w-full container mx-auto px-4 mb-16">
          <p className="text-center mb-8">
            We are here to assist you. Whether you have a question about our services, need support, or just want to give us feedback, feel free to reach out. Our team is dedicated to ensuring you receive the best possible service.
          </p>
          <div className="flex flex-col md:flex-row py-12 justify-center items-center gap-28 md:space-x-12">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="flex justify-center items-center mb-4">
                <MdOutlineAttachEmail className="text-blue-600" size={80} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Write To Us On</h3>
              <a href="mailto:info@esolutions.co.in" className="text-gray-600 text-sm lg:text-base">info@esolutions.co.in</a>
            </div>

            <div className="hidden md:block border-l-[1px] border-gray-500 border- h-32"></div>

            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center mb-4">
                <MdOutlinePhone className="text-blue-600" size={80} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Let&apos;s Talk</h3>
              <a href="tel:+91 78888 53170" className="text-gray-600 text-sm lg:text-base">+91 78888 53170</a>
            </div>
          </div>
        </div>


        <div className="bg-[#f5f5f5] max-w-[1700px] mx-auto">
          <div className="w-full px-4 py-20 lg:w-2/3 lg:mb-0 mx-auto">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold">We are here to help you</div>
            <div className={'pb-4 pt-16 h-full'}>
              <ContactUsForm />
            </div>
          </div>
        </div>


      </div>


    </main >
  );
}

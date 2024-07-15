import Link from "next/link"

const UnderBanner = () => {
    return (
        <div className="container mx-auto py-12 md:py-24 lg:py-36 px-6 text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-8">Exceptional Design Services for Exceptional User Experience!</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6">
                Our expert designers provide web design, graphic design, 3D modelling, video and animation services to suit your business needs.
            </p>
            <p className="text-base font-semibold underline md:text-lg lg:text-xl w-full md:w-3/4 lg:w-2/3 mx-auto">
                LETS GET STARTED!
            </p>
        </div>
    )
}

export default UnderBanner

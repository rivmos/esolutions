import CustomButton from "@/app/ui/common/CustomButton"

const UnderBanner = ({title, description, btnText} : {title: string, description: string, btnText: string}) => {
    return (
        <div className="container mx-auto py-8 md:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                {title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                {description}
            </p>
            <CustomButton href="/web/contactus" className="!w-56">
                {btnText}
            </CustomButton>
        </div>
    )
}

export default UnderBanner

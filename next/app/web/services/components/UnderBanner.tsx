import CustomButton from "@/app/ui/common/CustomButton"

const UnderBanner = ({title, description, btnText} : {title: string, description: string, btnText: string}) => {
    return (
        <div className="max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto font-bold mb-4 sm:mb-5 md:mb-7 lg:mb-9">
                {title}
            </h2>
            <p className="text-sm md:text-base mx-auto mb-4 sm:mb-5 md:mb-7 lg:mb-9">
                {description}
            </p>
            <CustomButton href="/web/contactus" className="!w-64">
                {btnText}
            </CustomButton>
        </div>
    )
}

export default UnderBanner

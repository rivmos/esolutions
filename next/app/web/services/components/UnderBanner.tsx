const UnderBanner = ({title, description, btnText} : {title: string, description: string, btnText: string}) => {
    return (
        <div className="container mx-auto py-12 md:py-24 lg:py-36 px-6 text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-8">{title}</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6">
                {description}
            </p>
            <p className="text-base font-semibold underline md:text-lg lg:text-xl w-full md:w-3/4 lg:w-2/3 mx-auto">
                {btnText}
            </p>
        </div>
    )
}

export default UnderBanner

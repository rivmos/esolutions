import prisma from '@/app/lib/prismadb'

export default async function Page({ params }: { params: { id: string } }) {

  const enquiry = await prisma?.enquiry?.findUnique({
    where: {
      id: params.id
    }
  })

  return (
    // <div className="bg-gray-100">
    //   <div className="bg-white">
    //     <h1 className="text-3xl font-bold mb-6">Query Details</h1>
    //     <div className="border-b pb-4 mb-4">
    //       <h2 className="text-xl font-semibold">
    //         {enquiry?.first} {enquiry?.last}
    //       </h2>
    //       <p className="text-gray-600"><strong>Email:</strong> {enquiry?.email}</p>
    //       <p className="text-gray-600"><strong>Mobile:</strong> {enquiry?.mobile}</p>
    //       <p className="text-gray-800 mt-2">{enquiry?.message}</p>
    //     </div>
    //   </div>
    // </div>
    <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col mx-auto space-y-6">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 dark:text-violet-600">
          <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
          <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
        </svg> */}
        <p className="text-2xl font-semibold text-left sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">{`"${enquiry?.message}"`}</p>
        <div className="flex justify-left space-x-3">
          <div>
            <p className="leading-tight">{enquiry?.first + ' ' + enquiry?.last}</p>
            <p className="text-sm leading-tight dark:text-gray-700">{enquiry?.email}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
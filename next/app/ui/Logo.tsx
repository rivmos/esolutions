import Link from "next/link"
import Image from "next/image"

const Logo = () => 
    <Link href='/web/home'>
        <Image src='/img/logo/logo.png' width={200} height={20} alt='eSolutions Logo' className="hidden md:block h-auto w-auto" />
        <Image src='/img/logo/logo.png' width={100} height={100} alt='eSolutions Logo' className="block md:hidden h-auto w-auto" />
    </Link>

export default Logo
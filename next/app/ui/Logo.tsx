import Link from "next/link"
import Image from "next/image"

const Logo = () => 
    <Link href='/web/home'>
        <Image src='/img/logo/logo.svg' width={200} height={20} alt='eSolutions Logo' className="hidden md:block" />
        <Image src='/img/logo/logo.svg' width={100} height={38} alt='eSolutions Logo' className="block md:hidden" />
    </Link>

export default Logo
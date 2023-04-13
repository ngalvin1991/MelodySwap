import { useRouter } from "next/router";
import Image from "next/image";
import logo from './MelodySwap.gif';

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/')}
            className="
        rounde-full
        h-40
        w-40
        p-1
        flex
        items-center
        justify-center
        hover:bg-opacity-10
        cursor-pointer
        transition
        
        ">
            <Image src={logo} alt="logo" />

        </div>
    )
}
export default SidebarLogo;
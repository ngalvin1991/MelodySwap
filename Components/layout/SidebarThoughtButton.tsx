import useLoginModal from "@/hooks/useLoginModal";

import { useRouter } from "next/router";
import { useCallback } from "react";
import { TfiThought } from "react-icons/tfi"

const SidebarThoughtButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal])

    return (
        <div onClick={onClick}>
            <div
                className="
            mt-6
            lg:hidden
            rounded-full
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center
            bg-teal-600
            hover:bg-opacity-80
            transition
            cursor-pointer
            ">
                <TfiThought size={24} color="white" />
            </div>
            <div 
            className="
            mt-6
            hidden
            lg:block
            px-4
            py-2
            rounded-full
            bg-teal-500
            hover:bg-opacity-50
            cursor-pointer
            transition
            
            ">
                <p 
                className="
                hidden
                lg:block
                text-center
                font-semibold
                text-white
                text-{20px}
                ">
                  Let's get an idea going  
                </p>

            </div>
        </div>
    )
}

export default SidebarThoughtButton; 
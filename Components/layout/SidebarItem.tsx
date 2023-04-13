import useLoginModal from "@/hooks/useLoginModal";
import userCurrentUser from "@/hooks/userCurrentUser";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons/lib";

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
    auth?: boolean;
}


const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick,
    auth,
}) => {
    const loginModal = useLoginModal();
    const { data: currentUser} = userCurrentUser();
    const router = useRouter();
    const handleClick = useCallback(() => {
        if (onClick) {
            return onClick();
        }

        if (auth && !currentUser) {
            loginModal.onOpen();
        } else if (href) {
            router.push(href);
        }
    }, [router, onClick, href, currentUser, auth, loginModal]);

    return (
        <div onClick={handleClick} className="flex flex-row items-center">
            <div
                className="
            relative
            rounded-full
            h-14
            w-14
            flex
            items-center#
            justify-center
            p-1
            hover:bg-teal-500
            hover:bg-opacity-30
            cursor-pointer
            lg:hidden"
            >
                <Icon size={26} color="white" />
            </div>
            <div
                className="
                relative
                hidden
                lg:flex
                items-row
                gap-4
                p-3
                rounded-full
                hover:bg-teal-500
                hover:bg-opacity-30
                cursor-pointer
                items-center
                "
            >
               <Icon size={24} color="white" />
               <p className="hidden lg:block text-white text-xl">
                {label}
               </p>
            </div>
        </div>
    );
}
export default SidebarItem;
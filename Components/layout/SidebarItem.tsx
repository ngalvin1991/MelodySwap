import { IconType } from "react-icons/lib";

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
}


const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick
}) => {
    return (
        <div className="flex flex-row items-center">
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
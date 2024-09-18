import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";
import MenuMobile from "site/islands/MenuMobile.tsx";
import type { Props as MenuMobileProps } from "site/islands/MenuMobile.tsx";

export type MenuNavItem = {
    label: string;
    href?: string;
    background?: string;
    color?: string;
    listlinks?: Link[];
}

export interface PropsHeaderReal {
    email: string;
    facebook: string;
    instagram: string;
    phone: string;
    imagem?: ImageWidget;
    logo?: ImageWidget;
    secondLogo?: ImageWidget;
    menuItems?: MenuNavItem[];
}

const HeaderReal = ({ email, facebook, instagram, phone, imagem, logo, secondLogo, menuItems }: PropsHeaderReal) => {
    return (
        <div className="flex flex-col w-full absolute top-0 z-10">
            <div className="bg-privia-passion py-2 hidden lg:px-5 lg:flex">
                <div className="flex items-center justify-between mx-auto px-4 w-full">
                    <div className="flex items-center">
                        <Image
                            src={imagem || ""}
                            class="max-w-[45px] max-h-[45px] object-cover mr-4"
                            width={28}
                            height={28}
                        />
                        <p className="text-white text-sm"><span className="font-bold">Email us at : </span>{email}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        {facebook && (
                            <a href={facebook}><Icon class="text-white" size={18} id="Facebook" strokeWidth={2} /></a>
                        )}
                        {instagram && (
                            <a href={instagram}><Icon class="text-white" size={18} id="Instagram" strokeWidth={2} /></a>
                        )}
                        <div className="flex items-center border-l-2 px-2 border-white gap-2">
                            <Icon class="text-white" size={18} id="Phone" strokeWidth={2} />
                            <p className="text-white text-sm font-Inter gap-2">{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-privia-pure px-5">
                <div className="flex items-center justify-between mx-auto px-4 py-4">
                    <div className="flex items-center">
                        <Image
                            src={logo || ""}
                            class="max-w-[120px] max-h-[44px] object-cover mr-4"
                            width={120}
                            height={44}
                        />
                    </div>
                    <div className="block lg:hidden items-center gap-2 z-50">
                        <MenuMobile items={menuItems} />
                    </div>
                    <div className="hidden lg:flex items-center gap-2 w-full">
                        <nav className="flex justify-start items-center gap-2 w-full">
                            {menuItems?.map((item: MenuNavItem) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-privia-prestige hover:underline transition duration-300 font-semibold text-sm px-3 py-6"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <Image
                            src={secondLogo || ""}
                            class=" object-cover mr-4"
                            width={100}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderReal;
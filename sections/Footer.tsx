import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "BE" | "Rede";
  href: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  secondaryLogo?: {
    src?: ImageWidget;
    alt?: string;
  };
  tertiaryLogo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  secondaryLogo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    alt: "Secondary Logo",
  },
  tertiaryLogo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    alt: "Tertiary Logo",
  },
  links = [
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
        { label: "Link Two", href: "/" },
        { label: "Link Three", href: "/" },
        { label: "Link Four", href: "/" },
        { label: "Link Five", href: "/" },
      ],
    },
    {
      title: "Column Two",
      items: [
        { label: "Link Six", href: "/" },
        { label: "Link Seven", href: "/" },
        { label: "Link Eight", href: "/" },
        { label: "Link Nine", href: "/" },
        { label: "Link Ten", href: "/" },
      ],
    },
    {
      title: "Column Three",
      items: [
        { label: "Link Eleven", href: "/" },
        { label: "Link Twelve", href: "/" },
        { label: "Link FourThirteenteen", href: "/" },
        { label: "Link Fourteen", href: "/" },
        { label: "Link Fifteen", href: "/" },
      ],
    },
  ],
  subscribe = {
    title: "Subcribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = [
    { network: "Facebook", href: "" },
    { network: "Rede", href: "" },
    { network: "Linkedin", href: "" },
    { network: "Instagram", href: "" },
    { network: "BE", href: "" },
  ],
}: Props) {
  return (
    <div class="mx-auto md:px-[5%] px-4 pt-10 mt-6 text-sm bg-privia-prestige">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-6 md:gap-48 lg:flex-row">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <Image
                src={logo.src || ""}
                width={100}
                height={35}
                alt={logo.alt}
                class="w-[120px] h-11 object-fill"
              />
              <Image
                src={secondaryLogo.src || ""}
                width={100}
                height={35}
                alt={secondaryLogo.alt}
                class="w-[120px] h-11 object-fill"
              />
              <Image
                src={tertiaryLogo.src || ""}
                width={100}
                height={35}
                alt={tertiaryLogo.alt}
                class="w-[120px] h-11 object-fill"
              />
            </div>
            <div class="lg:w-[60%]">
              <h4 class="font-semibold text-white text-2xl mb-4">{subscribe?.title}</h4>
              <form class="flex flex-col">
                <p
                  class="text-base mb-4 text-[#6D737A] font-normal"
                  dangerouslySetInnerHTML={{ __html: subscribe.instructions }}
                >
                </p>
                <p class="text-base mb-4 mt-4 text-[#6D737A] font-normal">{subscribe.description}</p>
              </form>
            </div>
            <div class="flex gap-4">
              {social?.map((item) => (
                <a class="block" href={item.href} target="_blank">
                  {item.network == "Facebook" && (
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="4" fill="#EDEFF6" />
                      <path d="M28.9851 13.1665H25.5888C23.5734 13.1665 21.3316 14.0308 21.3316 17.0094C21.3415 18.0473 21.3316 19.0413 21.3316 20.16H19V23.9429H21.4038V34.8332H25.8208V23.871H28.7362L29 20.1493H25.7447C25.7447 20.1493 25.752 18.4938 25.7447 18.013C25.7447 16.8359 26.946 16.9033 27.0183 16.9033C27.5899 16.9033 28.7014 16.905 28.9868 16.9033V13.1665H28.9851Z" fill="#4A60A1" />
                    </svg>

                  )}
                  {item.network == "Rede" && (
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="4" fill="#EDEFF6" />
                      <g clip-path="url(#clip0_43_593)">
                        <path d="M14 24C14 22.1867 14.4467 20.5133 15.34 18.98C16.2333 17.4467 17.4467 16.2333 18.98 15.34C20.5133 14.4467 22.1867 14 24 14C25.8133 14 27.4867 14.4467 29.02 15.34C30.5533 16.2333 31.7667 17.4467 32.66 18.98C33.5533 20.5133 34 22.1867 34 24C34 25.8133 33.5533 27.4867 32.66 29.02C31.7667 30.5533 30.5533 31.7667 29.02 32.66C27.4867 33.5533 25.8133 34 24 34C22.1867 34 20.5133 33.5533 18.98 32.66C17.4467 31.7667 16.2333 30.5533 15.34 29.02C14.4467 27.4867 14 25.8133 14 24ZM15.66 24C15.66 26.08 16.36 27.9133 17.76 29.5C18.4 28.2467 19.4133 27.0533 20.8 25.92C22.1867 24.7867 23.54 24.0733 24.86 23.78C24.66 23.3133 24.4667 22.8933 24.28 22.52C21.9867 23.2533 19.5067 23.62 16.84 23.62C16.32 23.62 15.9333 23.6133 15.68 23.6C15.68 23.6533 15.6767 23.72 15.67 23.8C15.6633 23.88 15.66 23.9467 15.66 24ZM15.92 21.94C16.2133 21.9667 16.6467 21.98 17.22 21.98C19.4467 21.98 21.56 21.68 23.56 21.08C22.5467 19.28 21.4333 17.78 20.22 16.58C19.1667 17.1133 18.2633 17.8533 17.51 18.8C16.7567 19.7467 16.2267 20.7933 15.92 21.94ZM18.9 30.58C20.4067 31.7533 22.1067 32.34 24 32.34C24.9867 32.34 25.9667 32.1533 26.94 31.78C26.6733 29.5 26.1533 27.2933 25.38 25.16C24.1533 25.4267 22.9167 26.1 21.67 27.18C20.4233 28.26 19.5 29.3933 18.9 30.58ZM21.96 15.94C23.1333 17.1533 24.22 18.6667 25.22 20.48C27.0333 19.72 28.4 18.7533 29.32 17.58C27.7733 16.3 26 15.66 24 15.66C23.32 15.66 22.64 15.7533 21.96 15.94ZM25.94 21.9C26.14 22.3267 26.3667 22.8667 26.62 23.52C27.6067 23.4267 28.68 23.38 29.84 23.38C30.6667 23.38 31.4867 23.4 32.3 23.44C32.1933 21.6267 31.54 20.0133 30.34 18.6C29.4733 19.8933 28.0067 20.9933 25.94 21.9ZM27.12 24.92C27.8 26.8933 28.26 28.92 28.5 31C29.5533 30.32 30.4133 29.4467 31.08 28.38C31.7467 27.3133 32.1467 26.16 32.28 24.92C31.3067 24.8533 30.42 24.82 29.62 24.82C28.8867 24.82 28.0533 24.8533 27.12 24.92Z" fill="#4A60A1" />
                      </g>
                      <defs>
                        <clipPath id="clip0_43_593">
                          <rect width="20" height="20" fill="white" transform="translate(14 14)" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                  {item.network == "Linkedin" && (
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="4" fill="#EDEFF6" />
                      <g clip-path="url(#clip0_43_596)">
                        <path d="M14 16.3232C14 15.6498 14.2252 15.0943 14.6757 14.6566C15.1261 14.2188 15.7117 14 16.4324 14C17.1403 14 17.713 14.2155 18.1506 14.6465C18.601 15.0909 18.8263 15.67 18.8263 16.3838C18.8263 17.0303 18.6075 17.569 18.1699 18C17.7194 18.4444 17.1274 18.6667 16.3938 18.6667H16.3745C15.6667 18.6667 15.094 18.4444 14.6564 18C14.2188 17.5555 14 16.9966 14 16.3232ZM14.251 34V20.505H18.5367V34H14.251ZM20.9112 34H25.1969V26.4646C25.1969 25.9932 25.2484 25.6296 25.3514 25.3737C25.5315 24.9158 25.805 24.5286 26.1718 24.2121C26.5386 23.8956 26.9987 23.7374 27.5521 23.7374C28.9936 23.7374 29.7143 24.7542 29.7143 26.7879V34H34V26.2626C34 24.2693 33.5496 22.7576 32.6486 21.7273C31.7477 20.697 30.5573 20.1818 29.0772 20.1818C27.417 20.1818 26.1236 20.9293 25.1969 22.4242V22.4646H25.1776L25.1969 22.4242V20.505H20.9112C20.9369 20.936 20.9498 22.2761 20.9498 24.5252C20.9498 26.7744 20.9369 29.9326 20.9112 34Z" fill="#4A60A1" />
                      </g>
                      <defs>
                        <clipPath id="clip0_43_596">
                          <rect width="20" height="20" fill="white" transform="translate(14 14)" />
                        </clipPath>
                      </defs>
                    </svg>


                  )}
                  {item.network == "Instagram" && (
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="4" fill="#EDEFF6" />
                      <g clip-path="url(#clip0_43_599)">
                        <path d="M20.6672 24C20.6672 22.1591 22.1591 20.6664 24 20.6664C25.8409 20.6664 27.3336 22.1591 27.3336 24C27.3336 25.8409 25.8409 27.3336 24 27.3336C22.1591 27.3336 20.6672 25.8409 20.6672 24ZM18.8651 24C18.8651 26.836 21.164 29.1349 24 29.1349C26.836 29.1349 29.1349 26.836 29.1349 24C29.1349 21.164 26.836 18.8651 24 18.8651C21.164 18.8651 18.8651 21.164 18.8651 24ZM28.1381 18.6616C28.1381 19.3239 28.6753 19.8619 29.3385 19.8619C30.0008 19.8619 30.5388 19.3239 30.5388 18.6616C30.5388 17.9992 30.0016 17.462 29.3385 17.462C28.6753 17.462 28.1381 17.9992 28.1381 18.6616ZM19.9596 32.1397C18.9847 32.0953 18.4548 31.933 18.1026 31.7956C17.6357 31.6139 17.3029 31.3974 16.9523 31.0477C16.6026 30.6979 16.3853 30.3651 16.2044 29.8982C16.067 29.546 15.9047 29.0162 15.8603 28.0412C15.8118 26.9871 15.8021 26.6704 15.8021 24C15.8021 21.3296 15.8126 21.0137 15.8603 19.9588C15.9047 18.9838 16.0679 18.4548 16.2044 18.1018C16.3861 17.6349 16.6026 17.3021 16.9523 16.9515C17.3021 16.6018 17.6349 16.3845 18.1026 16.2036C18.4548 16.0662 18.9847 15.9039 19.9596 15.8595C21.0137 15.811 21.3304 15.8013 24 15.8013C26.6704 15.8013 26.9863 15.8118 28.0412 15.8595C29.0162 15.9039 29.5452 16.067 29.8982 16.2036C30.3651 16.3845 30.6979 16.6018 31.0485 16.9515C31.3982 17.3013 31.6147 17.6349 31.7964 18.1018C31.9338 18.454 32.0961 18.9838 32.1406 19.9588C32.189 21.0137 32.1987 21.3296 32.1987 24C32.1987 26.6696 32.189 26.9863 32.1406 28.0412C32.0961 29.0162 31.933 29.546 31.7964 29.8982C31.6147 30.3651 31.3982 30.6979 31.0485 31.0477C30.6987 31.3974 30.3651 31.6139 29.8982 31.7956C29.546 31.933 29.0162 32.0953 28.0412 32.1397C26.9871 32.1882 26.6704 32.1979 24 32.1979C21.3304 32.1979 21.0137 32.1882 19.9596 32.1397ZM19.8772 14.0606C18.8126 14.109 18.0856 14.2779 17.4499 14.525C16.7924 14.7803 16.2351 15.1228 15.6785 15.6785C15.1228 16.2342 14.7803 16.7916 14.525 17.4499C14.2779 18.0856 14.109 18.8126 14.0606 19.8772C14.0113 20.9435 14 21.2843 14 24C14 26.7157 14.0113 27.0565 14.0606 28.1228C14.109 29.1874 14.2779 29.9144 14.525 30.5501C14.7803 31.2076 15.122 31.7658 15.6785 32.3215C16.2342 32.8772 16.7916 33.2189 17.4499 33.475C18.0864 33.7221 18.8126 33.891 19.8772 33.9394C20.9443 33.9879 21.2843 34 24 34C26.7165 34 27.0565 33.9887 28.1228 33.9394C29.1874 33.891 29.9144 33.7221 30.5501 33.475C31.2076 33.2189 31.7649 32.8772 32.3215 32.3215C32.8772 31.7658 33.2189 31.2076 33.475 30.5501C33.7221 29.9144 33.8918 29.1874 33.9394 28.1228C33.9879 27.0557 33.9992 26.7157 33.9992 24C33.9992 21.2843 33.9879 20.9435 33.9394 19.8772C33.891 18.8126 33.7221 18.0856 33.475 17.4499C33.2189 16.7924 32.8772 16.2351 32.3215 15.6785C31.7658 15.1228 31.2076 14.7803 30.5509 14.525C29.9144 14.2779 29.1874 14.1082 28.1236 14.0606C27.0574 14.0121 26.7165 14 24.0008 14C21.2843 14 20.9443 14.0113 19.8772 14.0606Z" fill="#4A60A1" />
                      </g>
                      <defs>
                        <clipPath id="clip0_43_599">
                          <rect width="20" height="20" fill="white" transform="translate(14 14)" />
                        </clipPath>
                      </defs>
                    </svg>

                  )}
                  {item.network == "BE" && (
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="4" fill="#EDEFF6" />
                      <path d="M22.0703 22.9219C22.0703 22.9219 23.9626 22.7832 23.9626 20.5929C23.9626 18.4025 22.4145 17.3335 20.4534 17.3335H14.0002V29.5741H20.4534C20.4534 29.5741 24.3928 29.6969 24.3928 25.9612C24.3928 25.9612 24.5646 22.9219 22.0703 22.9219ZM19.9889 19.5091H20.4534C20.4534 19.5091 21.3306 19.5091 21.3306 20.7827C21.3306 22.0561 20.8147 22.2407 20.2296 22.2407H16.8436V19.5091H19.9889ZM20.271 27.3985H16.8436V24.1274H20.4534C20.4534 24.1274 21.7608 24.1105 21.7608 25.8084C21.7608 27.2401 20.7843 27.3877 20.271 27.3985ZM29.6467 20.4479C24.8776 20.4479 24.8818 25.151 24.8818 25.151C24.8818 25.151 24.5546 29.8301 29.6467 29.8301C29.6467 29.8301 33.8901 30.0694 33.8901 26.5751H31.7078C31.7078 26.5751 31.7805 27.891 29.7195 27.891C29.7195 27.891 27.5368 28.0354 27.5368 25.7614H33.9628C33.9628 25.7614 34.666 20.4479 29.6467 20.4479ZM27.5129 24.1274C27.5129 24.1274 27.7793 22.2407 29.6952 22.2407C31.6106 22.2407 31.5866 24.1274 31.5866 24.1274H27.5129ZM32.095 19.562H26.9786V18.0546H32.095V19.562Z" fill="#4A60A1" />
                    </svg>

                  )}
                </a>
              ))}
            </div>
          </div>
          <div class="flex g  ap-9">
            {links?.map((link) => (
              <div>
                <h4 class="font-semibold text-2xl mb-8 text-white">{link.title}</h4>
                <div class="flex flex-col gap-4">
                  {link.items?.map((item) => (
                    <a
                      class="block hover:underline link no-underline py-1 text-base font-normal text-[#6D737A]"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="border-primary border-t flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center py-8 text-[#6D737A]">
          <div class="flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
            <a
              href={madeWith?.href}
              class="flex items-center gap-2"
              target="_blank"
            >
              <span>{madeWith?.label}</span>
              <Image
                src={madeWith?.src || ""}
                width={130}
                height={70}
                class="w-[70px]"
                alt={madeWith?.label}
              />
            </a>
            <span>{copyright}</span>
            <div class="flex gap-2 justify-between lg:gap-6">
              {bottomLinks?.map((item) => (
                <a class="link" href={item.href} target="_blank">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

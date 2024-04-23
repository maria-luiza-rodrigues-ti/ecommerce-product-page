import Logo from "../assets/logo.svg";
import UserAvatar from "../assets/image-avatar.png";

import { Minicart } from "../components/minicart";
import { ProductType } from "@/app";
import { MenuMobile } from "./menu-mobile";

interface HeaderProps {
  onAddProductToCart: () => ProductType | undefined;
}

export function Header({ onAddProductToCart }: HeaderProps) {
  function sendProductToMinicart() {
    if (!onAddProductToCart) return;

    const productSentToMinicart = onAddProductToCart();

    return productSentToMinicart;
  }

  return (
    <header className="flex justify-between items-center lg:items-end max-w-[1100px] mx-auto p-6 lg:p-0 lg:pt-7 lg:px-6 xl:px-0 border-b border-gray-100 ">
      <div className="flex gap-4 lg:gap-14">
        <MenuMobile className="lg:hidden" />

        <img src={Logo} alt="Sneakers Logo" className="max-h-5" />

        <nav className="hidden lg:flex">
          <ul className="flex gap-8 items-center ">
            <li className="text-dark-grayish-blue md:pb-[41px]  border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
              <a href="#">Collections</a>
            </li>
            <li className="text-dark-grayish-blue md:pb-[41px]  border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
              <a href="#">Men</a>
            </li>
            <li className="text-dark-grayish-blue md:pb-[41px]  border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
              <a href="#">Women</a>
            </li>
            <li className="text-dark-grayish-blue md:pb-[41px]  border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
              <a href="#">About</a>
            </li>
            <li className="text-dark-grayish-blue md:pb-[41px]  border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <nav>
        <ul className="flex lg:items-end gap-4 lg:gap-[46px]  ">
          <li className="flex lg:pb-12">
            <Minicart onAddProductToCart={sendProductToMinicart} />
          </li>
          <li className="lg:pb-[34px]">
            <a href="#">
              <img
                src={UserAvatar}
                className="max-h-8 md:max-h-[50px] border-2 rounded-full border-transparent transition hover:border-orange"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

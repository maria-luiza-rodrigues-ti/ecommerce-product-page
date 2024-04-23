import Logo from "../assets/logo.svg";
import UserAvatar from "../assets/image-avatar.png";

import { Minicart } from "../components/minicart";
import { ProductType } from "@/app";

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
    <header className="flex justify-between items-end max-w-[1100px] mx-auto p-6 md:p-0 md:pt-7 border-b border-gray-100 ">
      <div className="flex gap-14">
        <img src={Logo} alt="Sneakers Logo" className="max-h-5" />
        <nav>
          <ul className="flex gap-8 items-center ">
            <li className="text-dark-grayish-blue md:pb-[41px] border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
              <a href="#">Collections</a>
            </li>
            <li className="text-dark-grayish-blue md:pb-[41px] border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
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
        <ul className="flex md:items-end gap-4 md:gap-[46px]  ">
          <li className="flex md:pb-12">
            <Minicart onAddProductToCart={sendProductToMinicart} />
          </li>
          <li className="md:pb-[34px]">
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

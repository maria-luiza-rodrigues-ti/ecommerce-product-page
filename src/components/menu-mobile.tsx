import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

export function MenuMobile({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={`${className}`}>
      <button onClick={toggleMenu}>
        <List size={22} weight="bold" color="#69707D" />
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 z-20 w-full h-full bg-black/75">
          <div className="bg-white w-[calc(100%-125px)] h-full p-8 flex flex-col gap-14">
            <button onClick={toggleMenu}>
              <X size={25} weight="bold" color="#69707D" />
            </button>

            <nav>
              <ul className="flex flex-col gap-5">
                <li className="text-black font-bold text-lg leading-6.5">
                  <a href="#">Collections</a>
                </li>
                <li className="text-black font-bold text-lg leading-6.5">
                  <a href="#">Men</a>
                </li>
                <li className="text-black font-bold text-lg leading-6.5">
                  <a href="#">Women</a>
                </li>
                <li className="text-black font-bold text-lg leading-6.5">
                  <a href="#">About</a>
                </li>
                <li className="text-black font-bold text-lg leading-6.5">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

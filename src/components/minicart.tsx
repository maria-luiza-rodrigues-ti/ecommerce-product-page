import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import CartIcon from "/assets/icon-cart-dark.svg";
import DeleteIcon from "/assets/icon-delete.svg";
import { ProductType } from "@/app";
import { useEffect, useState } from "react";

interface MinicartProps {
  onAddProductToCart: () => ProductType | undefined;
}

export function Minicart({ onAddProductToCart }: MinicartProps) {
  const products = onAddProductToCart();
  const [productInTheMinicart, setProductInTheMinicart] =
    useState<ProductType>();
  const [quantityOfProductInTheMinicart, setQuantityOfProductInTheMinicart] =
    useState<number>(0);

  useEffect(() => {
    if (!products) return;
    setProductInTheMinicart(products);
  }, [products]);

  useEffect(() => {
    if (productInTheMinicart?.quantity !== undefined) {
      setQuantityOfProductInTheMinicart(
        (state) => state + productInTheMinicart?.quantity
      );
    }
  }, [productInTheMinicart?.quantity]);

  function onDeleteProduct() {
    setProductInTheMinicart(undefined);
    setQuantityOfProductInTheMinicart(0)
  }

  return (
    <DropdownMenu.Root defaultOpen={false}>
      <DropdownMenu.Trigger asChild>
        <button className="relative transition-all outline-none">
          <img
            src={CartIcon}
            alt="Cart Icon"
            className="opacity-60 transition-all hover:opacity-100"
          />
          {quantityOfProductInTheMinicart ? (
            <span className="absolute lg:-top-2 left-2.5 text-[0.625rem] font-boldpy-[3px] px-[6px] rounded-md bg-orange text-white transition-all">
              {quantityOfProductInTheMinicart}
            </span>
          ) : null}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={30}
          align="center"
          className="w-[calc(100vw-2rem)] lg:w-[22.5rem] -translate-x-6 lg:translate-x-0 bg-white rounded-[10px] shadow-minicart data-[side=top]:animate-slide-down data-[side=bottom]:animate-slide-up"
        >
          <DropdownMenu.Label className="px-6 pt-6 pb-[1.688rem] text-very-dark-blue font-bold">
            Cart
          </DropdownMenu.Label>
          <DropdownMenu.Separator className="h-[1px] w-full bg-border-gray-100" />
          {productInTheMinicart ? (
            <>
              <DropdownMenu.Item className="flex p-6 gap-4">
                <img
                  src={productInTheMinicart.images[0].thumb}
                  className="w-[3.125rem] h-[3.125rem] rounded"
                />
                <div className="text-dark-grayish-blue text-base">
                  <h3>{productInTheMinicart.title}</h3>
                  <div>
                    <span>
                      ${productInTheMinicart.discountedPrice} x{" "}
                      {quantityOfProductInTheMinicart}
                    </span>
                    <span className="ml-[0.375rem] text-very-dark-blue font-bold">
                      ${productInTheMinicart.price}
                    </span>
                  </div>
                </div>
                <button onClick={onDeleteProduct} className="ml-auto lg:ml-[3px]">
                  <img src={DeleteIcon} alt="" />
                </button>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="pt-[2px] px-6 pb-8">
                <button className="rounded-[10px] px-6 h-14 bg-orange text-white w-full font-bold">
                  Checkout
                </button>
              </DropdownMenu.Item>
            </>
          ) : (
            <div className="flex items-center justify-center h-64 text-dark-grayish-blue font-bold">
              <span>Your cart is empty</span>
            </div>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

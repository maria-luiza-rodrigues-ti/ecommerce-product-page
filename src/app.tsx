import Logo from "./assets/logo.svg";

import data from "../products.json";

import UserAvatar from "./assets/image-avatar.png";
import Minus from "./assets/icon-minus.svg";
import Plus from "./assets/icon-plus.svg";
import AddToCartIcon from "./assets/icon-cart-white.svg";
import { ProductSlider } from "./components/product-slider";
import { useState } from "react";
import { Minicart } from "./components/minicart";

export interface ProductImageProps {
  id: number;
  alt: string;
  image: string;
  thumb: string;
}

export interface ProductType {
  id: number;
  title: string;
  brand: string;
  description: string;
  discountedPrice: string;
  discount: string;
  price: string;
  images: ProductImageProps[];
  quantity: number;
}

export function App() {
  const { products } = data;
  const [product, setProduct] = useState<ProductType>(products[0]);
  const [productAddedToCart, setProductAddedToCart] = useState<ProductType>();

  function handleProductSliderImages() {
    return product.images;
  }

  const hasAnyProduct = product.quantity === 0;

  function handleRemoveOneProduct() {
    if (!product.quantity) return;
    setProduct((state) => ({ ...state, quantity: state.quantity - 1 }));
  }

  function handleAddOneProduct() {
    setProduct((state) => ({ ...state, quantity: state.quantity + 1 }));
  }

  function handleAddProductsToCart() {
    setProductAddedToCart(product);
  }

  function addProductToMinicart() {
    if (!productAddedToCart) return;

    return productAddedToCart;
  }

  return (
    <>
      <header className="flex justify-between items-end max-w-[1100px] mx-auto pt-7 border-b border-gray-100 ">
        <div className="flex gap-14">
          <img src={Logo} alt="Sneakers Logo" className="max-h-5" />
          <nav>
            <ul className="flex gap-8 items-center ">
              <li className="text-dark-grayish-blue pb-[41px] border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
                <a href="#">Collections</a>
              </li>
              <li className="text-dark-grayish-blue pb-[41px] border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
                <a href="#">Men</a>
              </li>
              <li className="text-dark-grayish-blue pb-[41px]  border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
                <a href="#">Women</a>
              </li>
              <li className="text-dark-grayish-blue pb-[41px]  border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
                <a href="#">About</a>
              </li>
              <li className="text-dark-grayish-blue pb-[41px]  border-b-4 border-transparent transition-all hover:border-orange hover:text-very-dark-blue">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <nav>
          <ul className="flex items-end gap-[46px]  ">
            <li className="flex pb-12 ">
              <Minicart onAddProductToCart={addProductToMinicart} />
            </li>
            <li className="pb-[34px]">
              <a href="#">
                <img
                  src={UserAvatar}
                  className="max-h-[50px] border-2 rounded-full border-transparent transition hover:border-orange"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mt-[90px] max-w-[1100px] mx-auto flex flex-row gap-[125px]">
        <ProductSlider onProductImages={handleProductSliderImages} />

        <div className="flex flex-col justify-center">
          <span className=" text-sm font-bold text-orange tracking-[.125rem] uppercase mb-[27px]">
            {product.brand}
          </span>
          <h1 className=" text-[2.75rem]/[3rem] font-bold text-very-dark-blue max-w-[440px]">
            {product.title}
          </h1>
          <p className=" text-dark-grayish-blue text-base/[26px] mt-7 max-w-[445px]">
            {product.description}
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-[10px] items-center mt-7 mb-8 max-w-max-content">
            <span className="inline-block text-[1.75rem] font-bold text-very-dark-blue">
              {`$ ${product.discountedPrice}`}
            </span>
            <span className="inline-block text-orange font-bold rounded-md bg-pale-orange h-max-content max-w-max-content px-2 py-1">
              {`${product.discount}%`}
            </span>
            <span className="inline-block text-base/[1.625rem] font-bold text-grayish-blue line-through">
              {`$ ${product.price}`}
            </span>
          </div>

          <div className="flex gap-4">
            <div className="rounded-[10px] bg-light-grayish-blue flex items-center gap-11 px-4 h-14 w-[157px]">
              <button onClick={handleRemoveOneProduct}>
                <img
                  src={Minus}
                  alt=""
                  className="opacity-60 transition-all hover:opacity-100"
                />
              </button>
              <span className="font-bold">{product.quantity}</span>
              <button onClick={handleAddOneProduct}>
                <img
                  src={Plus}
                  alt=""
                  className="opacity-60 transition-all hover:opacity-100"
                />
              </button>
            </div>
            <button
              disabled={hasAnyProduct}
              onClick={handleAddProductsToCart}
              className="rounded-[10px] bg-orange text-white h-14 flex justify-center items-center gap-4 flex-1 opacity-60 transition-all hover:opacity-100 disabled:cursor-not-allowed disabled:hover:opacity-60"
            >
              <img src={AddToCartIcon} alt="" />
              Add to cart
            </button>
          </div>
        </div>
      </main>

      <footer className="flex justify-center mt-[18.25rem] mb-4 text-sm">
        <div
          className="
        "
        >
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
          <span className="block">
            Coded by <a href="#">Maria Luiza Rodrigues</a>.
          </span>
        </div>
      </footer>
    </>
  );
}

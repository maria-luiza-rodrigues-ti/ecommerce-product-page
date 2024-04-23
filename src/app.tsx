import data from "../products.json";

import Minus from "/assets/icon-minus.svg";
import Plus from "/assets/icon-plus.svg";
import AddToCartIcon from "/assets/icon-cart-white.svg";
import { ProductSlider } from "./components/product-slider";
import { useState } from "react";
import { Header } from "./components/header";

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
      <Header onAddProductToCart={addProductToMinicart} />
      <main className="lg:mt-[90px] max-w-[1100px] mx-auto flex flex-row flex-wrap gap-6 lg:gap-[125px] relative z-0">
        <ProductSlider onProductImages={handleProductSliderImages} />

        <div className="flex flex-col w-full lg:w-max justify-center px-6 lg:px-0">
          <span className=" text-sm font-bold text-orange tracking-[.125rem] uppercase mb-5 md:mb-[27px]">
            {product.brand}
          </span>
          <h1 className=" text-[2.75rem]/[3rem] font-bold text-very-dark-blue lg:max-w-[440px]">
            {product.title}
          </h1>
          <p className=" text-dark-grayish-blue text-base/[26px] mt-4 md:mt-7 lg:max-w-[445px]">
            {product.description}
          </p>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-[10px] items-center mt-4 md:mt-7 mb-8 md:max-w-max-content">
            <span className="inline-block text-[1.75rem] font-bold text-very-dark-blue">
              {`$ ${product.discountedPrice}`}
            </span>
            <span className="inline-block text-orange font-bold rounded-md bg-pale-orange h-max-content max-w-max-content px-2 py-1">
              {`${product.discount}%`}
            </span>
            <span className="inline-block text-base/[1.625rem] font-bold text-grayish-blue line-through text-right md:text-left">
              {`$ ${product.price}`}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="rounded-[10px] bg-light-grayish-blue flex justify-between items-center gap-11 px-4 h-14 w-full lg:w-[157px]">
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
              className="rounded-[10px] bg-orange text-white h-14 flex justify-center items-center gap-4 lg:flex-1 opacity-60 transition-all hover:opacity-100 disabled:cursor-not-allowed disabled:hover:opacity-60"
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

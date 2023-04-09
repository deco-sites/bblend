import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import ProductSelector from "./ProductVariantSelector.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? images!.length! - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images!.length! - 1 ? 0 : curr + 1));

  return (
    <>
      <div class="py-0 lg:py-10 mx-6 hidden lg:block">
        {/* Desktop Version */}
        <div class="hidden lg:flex gap-4 items-center lg:flex-row w-4/5 mx-auto justify-center ">
          {/* Product Info */}
          <div class="flex-auto px-4 w-1/3 lg:px-0 flex-wrap">
            {/* Code and name */}
            <div class="mt-4 lg:mt-8">
              <h1 class="font-extrabold text-xl text-gray-700">{name}</h1>
            </div>
            {/* Description card */}
            <div class="mt-4 lg:mt-6">
              <h1 class="text-gray-500 text-lg text-left">
                {description}
              </h1>
            </div>

            {}
          </div>
          {/* Image Gallery */}
          <div class="overflow-hidden relative w-1/3">
            <div
              class="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {images!.map((s) => (
                <Image
                  src={s.url!}
                  alt={"image"}
                  height={300}
                  width={300}
                  class="w-full"
                />
              ))}
            </div>
            <div class="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                class="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
              >
                <Icon
                  id={"ChevronLeft"}
                  width={40}
                  height={40}
                  strokeWidth={0.01}
                />
              </button>
              <button
                onClick={next}
                class="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
              >
                <Icon
                  id={"ChevronRight"}
                  width={40}
                  height={40}
                  strokeWidth={0.01}
                />
              </button>
            </div>
            <div class="absolute bottom-4 right-0 left-0">
              <div class="flex items-center justify-center gap-2">
                {images!.map((_, i) => (
                  <div
                    class={`transition-all w-3 h-3 bg-black rounded-full ${
                      curr === i ? "p-2" : "bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Prices */}
          <div class="w-1/3">
            <div class="mt-4">
              <div class="flex flex-col gap-2 justify-center items-center w-full">
                <div class="flex w-full flex-row justify-between gap-2">
                  <button class="w-full py-1 focus:outline-none focus:border-pink-500 group px-3 flex flex-col justify-center border-1 rounded-lg bg-gray-100 font-extrabold">
                    <div class="w-full flex flex-row justify-between items-center">
                      <button class="group-focus:bg-pink-500 h-4 w-4 rounded-full border-1 border-gray-200" />
                      Uma única vez
                      <span class="text-pink-500 font-light">
                        Por:<span class="font-extrabold">
                          R${offers?.highPrice}
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
                <div class="flex w-full flex-row justify-between gap-2">
                  <button class="w-full py-1 focus:outline-none focus:border-pink-500 group px-3 flex flex-col justify-center border-1 rounded-lg bg-gray-100 font-extrabold">
                    <div class="w-full flex flex-row justify-between items-center">
                      <button class="group-focus:bg-pink-500 h-4 w-4 rounded-full border-1 border-gray-200" />
                      Compra Programada
                      <div class="flex flex-col items-center">
                        <div>
                          <button class="bg-purple-700 px-2 text-white font-extrabold text-xs rounded-full">
                            Ganhe +5% off
                          </button>
                        </div>
                        <div>
                          <span class="text-pink-500 font-light">
                            Por:<span class="font-extrabold">
                              R${offers?.lowPrice}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="hidden group-focus:flex flex-col items-center w-full">
                      <p class="font-light text-lg text-center mt-2">
                        Escolha a frequência que deseja receber:
                      </p>
                      <div class="flex flex-row justify-around w-full  ">
                        <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-400 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                          30 dias
                        </button>
                        <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-400 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                          45 dias
                        </button>
                        <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-400 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                          60 dias
                        </button>
                        <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-400 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                          75 dias
                        </button>
                        <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-400 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                          90 dias
                        </button>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* </div> */}
            <button class="w-full self-center text-center font-bold text-lg  mt-2 h-12 rounded-full bg-pink-600 text-white">
              Selecionar quantidade
            </button>
            <p class="w-full text-purple-800 font-extrabold my-2 text-xs text-center">
              +5%OFF com a Compra Programada
            </p>
            <div class="w-full flex flex-row justify-center mb-8">
              <a class="underline text-pink-500 cursor-pointer font-extrabold text-xl">
                Mais informações
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div class="flex lg:hidden flex-col gap-4 lg:flex-row lg:gap-10">
        <div class="overflow-hidden relative">
          <div
            class="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {images?.map((s) => (
              <Image
                src={s.url!}
                alt={"image"}
                height={300}
                width={300}
                class="w-full"
              />
            ))}
          </div>
          <div class="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              class="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
            >
              <Icon
                id={"ChevronLeft"}
                width={40}
                height={40}
                strokeWidth={0.01}
              />
            </button>
            <button
              onClick={next}
              class="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
            >
              <Icon
                id={"ChevronRight"}
                width={40}
                height={40}
                strokeWidth={0.01}
              />
            </button>
          </div>
          <div class="absolute bottom-4 right-0 left-0">
            <div class="flex items-center justify-center gap-2">
              {images?.map((_, i) => (
                <div
                  class={`transition-all w-3 h-3 bg-black rounded-full ${
                    curr === i ? "p-2" : "bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Product Info */}
        <div class="flex-auto px-4 lg:px-0">
          {/* Code and name */}
          <div class="mt-4 lg:mt-8">
            <h1 class="font-extrabold text-xl text-gray-700">{name}</h1>
          </div>
          {/* Description card */}
          <div class="mt-4 lg:mt-6">
            <h1 class="text-gray-500 text-lg text-left">
              {description}
            </h1>
          </div>
          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-col gap-2 justify-center items-center w-full">
              <div class="flex w-full flex-row justify-between gap-2">
                <button class="w-full py-1 focus:outline-none focus:border-pink-500 group px-3 flex flex-col justify-center border-1 rounded-lg bg-gray-100 font-extrabold">
                  <div class="w-full flex flex-row justify-between items-center">
                    <button class="group-focus:bg-pink-500 h-4 w-4 rounded-full border-1 border-gray-200" />
                    Uma única vez
                    <span class="text-pink-500 font-light">
                      Por:<span class="font-extrabold">
                        R${offers?.highPrice}
                      </span>
                    </span>
                  </div>
                </button>
              </div>
              <div class="flex w-full flex-row justify-between gap-2">
                <button class="w-full py-1 focus:outline-none focus:border-pink-500 group px-3 flex flex-col justify-center border-1 rounded-lg bg-gray-100 font-extrabold">
                  <div class="w-full flex flex-row justify-between items-center">
                    <button class="group-focus:bg-pink-500 h-4 w-4 rounded-full border-1 border-gray-200" />
                    Compra Programada
                    <div class="flex flex-col items-center">
                      <div>
                        <button class="bg-purple-700 px-2 text-white font-extrabold text-xs rounded-full">
                          Ganhe +5% off
                        </button>
                      </div>
                      <div>
                        <span class="text-pink-500 font-light">
                          Por:<span class="font-extrabold">
                            R${offers?.lowPrice}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="hidden group-focus:flex flex-col items-center w-full">
                    <p class="font-light text-lg text-center mt-2">
                      Escolha a frequência que deseja receber:
                    </p>
                    <div class="flex flex-row justify-around w-full  ">
                      <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-300 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                        30 dias
                      </button>
                      <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-300 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                        45 dias
                      </button>
                      <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-300 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                        60 dias
                      </button>
                      <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-300 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                        75 dias
                      </button>
                      <button class="h-10 focus:outline-none py-2 my-2 px-1 border-gray-100 text-gray-300 font-extrabold focus:text-pink-500 focus:border-pink-500 border-2 rounded-lg outline-none">
                        90 dias
                      </button>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div class="">
              <button class="w-full font-bold text-lg mx-auto mt-2 h-12 rounded-full bg-pink-600 text-white">
                Selecionar quantidade
              </button>
              <p class="w-full text-purple-800 font-extrabold my-2 text-xs text-center">
                +5%OFF com a Compra Programada
              </p>
              <div class="w-full flex flex-row justify-center mb-8">
                <a class="underline text-pink-500 cursor-pointer font-extrabold text-xl">
                  Mais informações
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;

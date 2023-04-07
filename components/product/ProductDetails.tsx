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

  return (
    <div class="py-0 lg:py-10 mx-6">
      {/* Desktop Version */}
      <div class="hidden lg:flex gap-4 items-center lg:flex-row w-4/5 mx-auto justify-center ">
        {/* Product Info */}
        <div class="flex-auto px-4 lg:px-0 w-6 flex-wrap">
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
        <div class="flex flex-row overflow-auto snap-x snap-mandatory scroll-smooth lg:gap-2 w-1/3 ml-8">
          {[front, back ?? front].map((img, index) => (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class="snap-center min-w-full lg:w-auto lg:h-[479px]"
              sizes="(max-width: 940px) 100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
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
                      Por:<span class="font-extrabold">R$2,29</span>
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
                          Por:<span class="font-extrabold">R$2,29</span>
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
      {/* Mobile Version */}
      <div class="flex lg:hidden flex-col gap-4 lg:flex-row lg:gap-10">
        {/* Image Gallery */}
        <div class="flex flex-row overflow-auto snap-x snap-mandatory scroll-smooth lg:gap-2">
          {[front, back ?? front].map((img, index) => (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class="snap-center min-w-[100vw] lg:min-w-0 lg:w-auto lg:h-[600px]"
              sizes="(max-width: 940px) 100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
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
                      Por:<span class="font-extrabold">R$2,29</span>
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
                          Por:<span class="font-extrabold">R$2,29</span>
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
          </div>

          {/* </div> */}
          <div class="lg:hidden">
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

          {}
        </div>
      </div>
    </div>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;

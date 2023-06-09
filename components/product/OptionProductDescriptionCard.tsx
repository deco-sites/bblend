import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import ProductSelector from "$store/components/product/ProductVariantSelector.tsx";
interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function OptionProductDescriptionCard({ product, preload }: Props) {
  const {
    url,
    productID,
    brand,
    category,
    description,
    name,
    image: images,
    offers,
    alternateName,
  } = product;

  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      data-deco="view-product"
      id={`product-card-${productID}`}
      class="group bg-default rounded-lg"
    >
      <div class="flex flex-col gap-1 py-2 items-center ">
        <h1 class="text-pink-700 text-xl font-extrabold whitespace-nowrap">
          <span class=" mr-2">{brand}</span>
          {product.productID === "471" ? "en.joy" : "un.plug"}
        </h1>
      </div>
      <div class="flex flex-col  items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Cores</p>

        <div
          class={`flex-row gap-1 mb-2 ${
            product.productID === "471" ? "flex" : "hidden"
          }`}
        >
          <button class="h-6 w-6 bg-black rounded-lg">
          </button>
          <button class="h-6 w-6 bg-red-500 rounded-lg">
          </button>
          <button class="h-6 w-6 bg-gray-500 rounded-lg">
          </button>
        </div>
        <div
          class={`flex-row gap-1 mb-2 ${
            product.productID === "471" ? "hidden" : "flex"
          }`}
        >
          <button class="h-6 w-6 bg-black rounded-lg">
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Capsulas</p>
        <div class="flex flex-row">
          <p class="text-xs mb-2">Prepara todas</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Agua</p>
        <div class="flex flex-row">
          <p class="text-xs mb-2">5 tipos</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Filtro</p>
        <div class="flex flex-row">
          <p class="text-xs mb-2">Sim</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Reservatório</p>
        <div class="flex flex-row">
          <p class="text-xs mb-2">-</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Dimensões</p>
        <div class="flex flex-row">
          <p class="text-xs mb-2">42 x 32 x 49 cm</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Peso</p>
        <div class="flex flex-row">
          <p class="text-xs mb-2">24 kg</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Guia rápido</p>
        <div class="flex flex-row">
          <button class="rounded-full bg-gray-100 mb-2 font-light px-6">
            Baixe aqui
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1 pb-2">
        <p class="text-xs text-pink-700 font-bold mt-2">Manual do usuário</p>
        <div class="flex flex-row">
          <button class="rounded-full bg-gray-100 mb-2 font-light px-6">
            Baixe aqui
          </button>
        </div>
      </div>
    </div>
  );
}

export default OptionProductDescriptionCard;

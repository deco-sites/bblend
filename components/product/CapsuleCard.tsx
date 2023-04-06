import type { Product } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Button from "$store/components/ui/Button.tsx";

interface Props {
  product: Product;
}

function CapsuleCard({ product }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;

  const [front, back] = images ?? [];
  return (
    <>
      {/* Mobile Version */}
      <div class="flex flex-col rounded-xl bg-gray-100 mx-3 rounded-xl">
        {/* Header */}
        <div class="h-4/6 min-w-full w-full flex flex-row">
          <a href={url} class="w-2/6">
            <Image
              src={front.url!}
              alt={front.alternateName}
              width={114}
              height={121}
              class=""
            />
          </a>
          <div class="flex flex-col mt-3">
            <a href={url}>
              <h3 class="mb-4 font-extrabold">Pepsi</h3>
            </a>
            <h2 class="text-pink-500 font-extrabold">RS$2,29</h2>
          </div>
          <div class="mx-auto mt-auto mb-2">
            <a href={url}>
              <button class="bg-pink-500 transition hover:bg-pink-800 font-extrabold rounded-full w-36 text-white h-10">
                Eu quero
              </button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div class="flex flex-row justify-between px-3 pb-3 min-w-full w-full h-2/6">
          <div class="text-sm w-1/2 self-end">
            <span class="text-gray-800 font-bold text-xs">Val da cáp:</span>
            {" "}
            08/05/2023
          </div>

          <div class="flex flex-col items-center justify-center w-1/2">
            <p class="text-purple-600 font-extrabold text-xs text-center">
              +5%OFF com a Compra Programada
            </p>
            <a class="truncate text-xs underline text-red-500 font-extrabold text-center">
              Conhecer a Compra Programada
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CapsuleCard;

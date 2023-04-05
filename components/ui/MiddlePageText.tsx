import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Container from "$store/components/ui/Container.tsx";
import CapsuleCard from "$store/components/product/CapsuleCard.tsx";
import CapsuleShelf from "../product/CapsuleShelf.tsx";

export interface Props {
  title?: string;
  secondTitle?: string;
  description?: string;
  products: LoaderReturnType<Product[] | null>;
}

function MiddlePageText({ title, secondTitle, description, products }: Props) {
  return (
    <>
      {/* Mobile Version */}
      <div class="flex md:hidden flex-col items-center justify-center w-full mb-3">
        {/* Main Title Div */}

        {/* Mobile Version */}
        <div class="lg:hidden mb-6">
          <Text variant="heading-2" class="text-center">
            Sempre uma opção Ideal{" "}
            <p class="font-extrabold">para cada momento</p>
          </Text>
        </div>

        {/* Second Div */}
        <div class="flex flex-row w-full">
          <Image
            src={"https://bblend.vteximg.com.br/arquivos/home-moments-1_op1.png?v=637763981646330000"}
            alt={"Mulher tomando suco"}
            width={185}
            height={215}
            class=""
          >
          </Image>
          <div class="flex flex-col justify-center w-1/2 ml-5">
            <h1 class="text-left font-extrabold text-lg">Sua manhã</h1>
            <h3 class="text-left text-lg">cheia de energia</h3>
            <p class="text-left">
              Seu suco natural de forma rápida, sem sujar a casa e com todos os
              nutrientes.
            </p>
          </div>
        </div>
      </div>
      {/* Desktop Version */}
      <div class="hidden md:flex flex-col items-center justify-center w-full mb-3">
        {/* Main Title Div */}
        <div class="hidden md:block mb-6 w-full">
          <h1 class="text-center text-4xl">
            Sempre uma opção Ideal{" "}
            <span class="font-extrabold text-gray-800">para cada momento</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div class="flex flex-row items-end self-end w-1/2 mr-36 flex-nowrap gap-4">
          <div>
            <h1 class="text-left font-extrabold text-2xl">Sua manhã</h1>
            <h3 class="text-left text-2xl truncate">cheia de energia</h3>
          </div>
          <p class="text-left">
            Seu suco natural de forma rápida, sem sujar a casa e com todos os
            nutrientes.
          </p>
        </div>

        {/* Image/Capsule Div */}
        <div class="flex flex-row w-4/5 lg:justify-center">
          <div class="md:w-1/2 lg:w-auto flex-shrink-0">
            <Image
              src={"https://bblend.vteximg.com.br/arquivos/home-moments-1_op1.png?v=637763981646330000"}
              alt={"Mulher tomando suco"}
              width={414}
              height={486}
              class=""
            >
            </Image>
          </div>
          <div class="md:flex lg:grid grid-cols-2 flex-row flex-wrap mt-4">
            {products?.map((product, index) => (
              <div class="lg:w-96 block mb-6">
                <CapsuleCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddlePageText;

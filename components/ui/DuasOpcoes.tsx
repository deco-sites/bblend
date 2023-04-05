import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import OptionProductCard from "$store/components/product/OptionProductCard.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";
import OptionProductDescriptionCard from "../product/OptionProductDescriptionCard.tsx";
export interface Props {
  title?: string;
  secondTitle?: string;
  description?: string;
  products: LoaderReturnType<Product[] | null>;
}

function DuasOpcoes({ title, secondTitle, description, products }: Props) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div class="flex flex-col items-center justify-center w-full bg-gray-100 mt-7">
      {/* Main Title Div */}
      <div class="flex flex-col gap-2 md:flex-row items-center my-6">
        <h1 class="text-4xl">Duas opções.</h1>
        <h1 class="text-4xl font-extrabold">
          Uma combina com você.
        </h1>
      </div>
      {/* Products Div */}
      <div class="flex flex-row gap-2 md:w-10/12">
        {products?.map((product, index) => (
          <div class="mx-2 block">
            <OptionProductCard product={product} preload={index === 0} />
          </div>
        ))}
      </div>
      {/* Footer Div */}
      <Button
        class="w-8/12 mt-4 mb-2 h-14 bg-purple-600 text-white font-extrabold"
        variant="primary"
      >
        Comprar para minha empresa
      </Button>
      <Button
        class="w-7/12 mt-4 mb-2 h-14 bg-purple-600 text-white font-extrabold"
        variant="primary"
      >
        Aprenda a instalar
      </Button>
      <a class="underline mb-12 font-extrabold">Especificação Técnica</a>
      {/* Compare os Modelos */}
      <div class="w-full flex flex-col items-center justify-center bg-default">
        <div class="flex justify-center my-14">
          <Text variant="heading-3" class="font-extrabold">
            Compare os modelos
          </Text>
        </div>
        <div class="flex flex-row gap-2 w-full justify-center">
          {products?.map((product, index) => (
            <div class="mx-2 w-full">
              <OptionProductDescriptionCard
                product={product}
                preload={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DuasOpcoes;

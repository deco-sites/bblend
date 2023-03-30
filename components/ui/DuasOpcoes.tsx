import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import OptionProductCard from "$store/components/ui/OptionProductCard.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";
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
    <div class="flex flex-col items-center justify-center w-full bg-gray-100">
      {/* Main Title Div */}
      <div>
        <Text variant="heading-3">Duas opções.</Text>
        <Text variant="heading-3" class="font-extrabold">
          Uma combina com você.
        </Text>
      </div>
      {/* Products Div */}
      <div class="flex flex-row gap-2">
        {products?.map((product, index) => (
          <div>
            <OptionProductCard product={product} preload={index === 0} />
          </div>
        ))}
      </div>
      {/* Footer Div */}
      <Button>Comprar para minha empresa</Button>
      <Button>Aprenda a instalar</Button>
      <a>Especificação Técnica</a>
    </div>
  );
}

export default DuasOpcoes;

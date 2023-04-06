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

export type Description = {
  title?: string;
  desc?: string;
};

export interface Props {
  image?: string;
  mainTitle: string;
  mainDesc: string;
  description?: Description[];
}

function ProductFooter({ image, description }: Props) {
  return (
    <div class="w-full flex flex-col items-center">
      <div class="w-full mb-2">
        <Image
          src={image!}
          alt={"Pepsi Black banner"}
          width={956}
          height={226}
          class="min-w-full w-full"
        >
        </Image>
      </div>
      <div class="flex flex-col mb-2 mx-20 w-3/5 gap-3">
        <div>
          <Text variant="heading-3">
            Qual bebida em cápsula vai revolucionar o seu dia de hoje?
          </Text>
        </div>
        <div>
          <Text variant="caption">
            Com a B.blend, você possui mais de 35 opções de bebidas em cápsula
            para fazer ao toque de um botão, cada uma com todo o potencial para
            transformar o seu momento e o seu dia.
          </Text>
        </div>
        {description?.map((desc) => (
          <div class="mb-4">
            <p class="font-extrabold text-left text-lg">{desc.title}</p>
            <p class="text-left">{desc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFooter;

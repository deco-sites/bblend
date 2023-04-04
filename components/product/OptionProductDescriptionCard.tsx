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
        <Text
          class="overflow-hidden overflow-ellipsis whitespace-nowrap"
          variant="heading-3"
        >
          {brand} en.joy
        </Text>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Cores</p>
        <div class="flex flex-row">
          <Button variant="tertiary" class="bg-red-500"></Button>
          <Button variant="tertiary" class="bg-red-500"></Button>
          <Button variant="tertiary" class="bg-red-500"></Button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Capsulas</p>
        <div class="flex flex-row">
          <p>Prepara todas</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Agua</p>
        <div class="flex flex-row">
          <p>5 tipos</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Filtro</p>
        <div class="flex flex-row">
          <p>Sim</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Reservatório</p>
        <div class="flex flex-row">
          <p>-</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Dimensões</p>
        <div class="flex flex-row">
          <p>42 x 32 x 49 cm</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Peso</p>
        <div class="flex flex-row">
          <p>24 kg</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Guia rápido</p>
        <div class="flex flex-row">
          <Button>Baixe aqui</Button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center border-b-1">
        <p>Manual do usuário</p>
        <div class="flex flex-row">
          <Button>Baixe aqui</Button>
        </div>
      </div>
    </div>
  );
}

export default OptionProductDescriptionCard;
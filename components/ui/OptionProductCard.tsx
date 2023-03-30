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

function OptionProductCard({ product, preload }: Props) {
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
      class="w-full group bg-default rounded-lg"
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={193}
            height={193}
            class="rounded w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={193}
            height={193}
            class="rounded w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          {seller && (
            <div
              class="absolute bottom-0 hidden sm:group-hover:flex flex-col gap-2 w-full p-2 bg-opacity-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(2px)",
              }}
            >
              <Button as="a" href={product.url}>Visualizar Produto</Button>
            </div>
          )}
        </div>

        <div class="flex flex-col gap-1 py-2 items-center ">
          <Text
            class="overflow-hidden overflow-ellipsis whitespace-nowrap"
            variant="heading-3"
          >
            en.joy
          </Text>
          {/* Quer ver como ela fica na sua casa? */}
          <div class="flex flex-row w-full mx-2">
            <Image
              src={"https://bblend.vteximg.com.br/arquivos/qrcode-mobile-box-purple.png?v=637950583506970000"}
              alt={front.alternateName}
              width={56}
              height={56}
              class="ml-2 mr-2"
              preload={preload}
              loading={preload ? "eager" : "lazy"}
            />

            <p class="text-left">QUER VER COMO ELA FICA NA SUA CASA?</p>
          </div>
          <Text variant="caption" class="text-left mx-4 my-1">
            Use nosso programa de Realidade Aumentada e veja como a nova B.blend
            en.joy fica linda na sua casa.
          </Text>
          <Button class="w-full mx-4 rounded-full my-2">
            Clique e surpreenda-se
          </Button>
          <div class="flex flex-col justify-center gap-2">
            <Text
              class="line-through"
              variant="list-price"
              tone="subdued"
            >
              {formatPrice(listPrice, offers!.priceCurrency!)}
            </Text>
            <Text variant="caption" tone="price">
              {formatPrice(price, offers!.priceCurrency!)}
            </Text>
            <Button class="rounded-lg mb-6">É Essa que eu quero</Button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default OptionProductCard;

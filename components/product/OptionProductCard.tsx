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

const BUTTONS = [
  { class: "bg-gray-500" },
  { class: "bg-black " },
  { class: "bg-red-500 " },
];

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
      class="group bg-default rounded-lg"
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
            {product.productID === "471" ? "en.joy" : "un.plug"}
          </Text>
          <div>
            <p class="text-black font-extrabold">Cor: Black</p>
            <div class="gap-1 flex justify-center mt-1 mb-3">
              {BUTTONS.map((button) => (
                <Button
                  variant="tertiary"
                  class={`${button.class} p-0 m-0 h-4 w-4 rounded-full`}
                />
              ))}
            </div>
          </div>
          <div>
            <p class="text-black font-extrabold text-center">Voltagem</p>
            <div class="gap-1 flex justify-center mt-1 mb-3">
              <Button
                variant="tertiary"
                class="rounded-full h-5 w-10 text-xs bg-white border-1 border-gray-500 focus:border-black"
              >
                110V
              </Button>
              <Button
                variant="tertiary"
                class="rounded-full h-5 w-10 text-xs bg-white border-1 border-gray-500 focus:border-black"
              >
                220V
              </Button>
            </div>
          </div>
          {/* Quer ver como ela fica na sua casa? */}
          <div class="flex flex-row mx-2 items-center">
            <Image
              src={"https://bblend.vteximg.com.br/arquivos/qrcode-mobile-box-purple.png?v=637950583506970000"}
              alt={front.alternateName}
              width={56}
              height={56}
              class="ml-2 mr-2 max-h-[56px]"
              preload={preload}
              loading={preload ? "eager" : "lazy"}
            />

            <p class="text-left ">
              QUER VER COMO ELA FICA NA SUA CASA?
            </p>
          </div>
          <Text variant="caption" class="text-left mx-4 my-1">
            Use nosso programa de Realidade Aumentada e veja como a nova B.blend
            en.joy fica linda na sua casa.
          </Text>
          <button class=" mb-10 mx-4 p-0 border-1 font-bold h-10 border-purple-500 bg-default rounded-full my-2 text-purple-500">
            <span class="p-0 m-0">Clique e surpreenda-se</span>
          </button>
          <div class="flex flex-col items-center justify-center gap-2">
            <p class="text-purple-700 font-light">
              Por: <span class="font-extrabold">10x de R$ 349,90</span>
            </p>
            <button class="bg-purple-500 text-white font-bold rounded-lg mb-6 h-12 px-8 text-sm">
              É Essa que eu quero
            </button>
            {
              /* <Text
              class="line-through"
              variant="list-price"
              tone="subdued"
            >
              {formatPrice(listPrice, offers!.priceCurrency!)}
            </Text>
            <Text variant="caption" tone="price">
              {formatPrice(price, offers!.priceCurrency!)}
            </Text>
            <Button class="rounded-lg mb-6 h-14">É Essa que eu quero</Button> */
            }
          </div>
        </div>
      </a>
    </div>
  );
}

export default OptionProductCard;

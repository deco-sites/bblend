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
  { class: "bg-gray-500 " },
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
            <p class="text-black font-extrabold text-center">Cor: Black</p>
            <div class="gap-1 flex justify-center mt-1 mb-3">
              {BUTTONS.map((button) => (
                <button
                  class={`${button.class} m-0 h-5 w-5 rounded-full`}
                />
              ))}
            </div>
          </div>
          <div>
            <p class="text-black font-extrabold text-center">Voltagem</p>
            <div class="gap-1 flex justify-center mt-1 mb-3">
              <button class="text-center px-3 rounded-full h-6 w-14 text-xs bg-white border-1 border-gray-200 hover:border-gray-400 focus:border-gray-800 transition duration-500">
                110V
              </button>
              <button class="text-center px-3 rounded-full h-6 w-14 text-xs bg-white border-1 border-gray-200 hover:border-gray-400 focus:border-gray-800 transition duration-500 ">
                <p>220V</p>
              </button>
            </div>
          </div>
          {/* Quer ver como ela fica na sua casa? */}
          {/* Mobile */}
          <div class="lg:hidden flex flex-col items-center gap-1 py-2 mx-10">
            <div class="flex flex-col mx-2 items-center gap-3 w-3/5">
              <div class="flex flex-row gap-3">
                <Image
                  src={"https://bblend.vteximg.com.br/arquivos/qrcode-mobile-box-purple.png?v=637950583506970000"}
                  alt={front.alternateName}
                  width={56}
                  height={56}
                  class=""
                  preload={preload}
                  loading={preload ? "eager" : "lazy"}
                >
                  <h1 class="text-left text-xs text-gray-500 ">
                    QUER
                    <p>VER COMO</p>
                    <p>ELA FICA NA</p>
                    <p class="font-extrabold text-purple-800">SUA CASA?</p>
                  </h1>
                </Image>
              </div>
              <p class="text-left mx-4 my-1 text-xs text-gray-500 uppercase">
                Use nosso programa de{" "}
                <span class="font-extrabold">Realidade Aumentada</span>{" "}
                e veja como a nova B.blend en.joy fica linda na sua casa.
              </p>
            </div>
            <button class="outline-none focus:outline-none mb-14 mx-4 p-0 border-1 font-bold h-10 border-purple-800 bg-default rounded-full my-2 text-purple-500">
              <span class="p-0 m-0">Clique e surpreenda-se</span>
            </button>
            <div class="flex flex-col items-center justify-center gap-2">
              <p class="text-purple-800 font-light">
                Por: <span class="font-extrabold">10x de R$ 349,90</span>
              </p>
              <button class="bg-purple-500 text-white font-bold rounded-lg mb-6 h-12 px-20 text-sm">
                É Essa que eu quero
              </button>
            </div>
          </div>

          {/* Quer ver como ela fica na sua casa? */}
          {/* Desktop */}
          <div class="hidden lg:flex flex-col gap-1 py-2 mx-4">
            <div class="ml-7">
              <h1 class="text-left text-3xl text-gray-400">
                QUER VER <p>COMO ELA FICA</p>
                <span class="font-extrabold text-purple-800">NA SUA CASA?</span>
              </h1>
            </div>
            <div class="flex flex-row ml-7 justify-center gap-2">
              <Image
                src={"https://bblend.vteximg.com.br/arquivos/qrcode-machine-enjoy.png?v=637950564751070000"}
                alt={front.alternateName}
                width={100}
                height={100}
                class=""
                preload={preload}
                loading={preload ? "eager" : "lazy"}
              />
              <div>
                <p class="text-left text-gray-400 text-sm mb-2">
                  Use nosso programa de{" "}
                  <span class="text-gray-500 font-extrabold">
                    Realidade Aumentada
                  </span>{" "}
                  e veja como a nova B.blend en.joy fica linda na sua casa.
                </p>
                <p class="text-purple-800 text-sm text-left font-extrabold">
                  Escaneie o QR Code e surpreenda-se.
                </p>
              </div>
            </div>

            <div class="flex flex-col items-center justify-center gap-2 mt-8">
              <h1 class="text-purple-700 font-light text-2xl">
                Por: <span class="font-extrabold">10x de R$ 349,90</span>
              </h1>
              <button class="bg-purple-500 text-white font-bold rounded-lg mb-6 h-12 px-28 text-sm">
                É Essa que eu quero
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default OptionProductCard;

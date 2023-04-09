import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Button from "$store/components/ui/Button.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import CapsuleCard from "$store/components/product/CapsuleCard.tsx";

export interface Props {
  title?: string;
  secondTitle?: string;
  description?: string;
  products: LoaderReturnType<Product[] | null>;
}

function LandingPageFooter(
  { title, secondTitle, description, products }: Props,
) {
  if (!products || products.length === 0) {
    return null;
  }
  return (
    <>
      {/* Mobile */}
      <div class="w-full lg:hidden flex flex-col items-center mb-10">
        {/* Title */}
        <div class="my-4">
          <h1 class="text-2xl text-gray-800 text-center">
            Suas cápsulas ao lado de sua B.blend{" "}
            <span class="text-gray-900 font-extrabold">no maior estilo</span>
          </h1>
        </div>
        {/* Ver acessorios Section */}
        <div
          style="background-image: url('https://bblend.vteximg.com.br/arquivos/porta-capsula-mobile@2x.png');"
          class="w-full flex flex-row items-center justify-center min-h-[650px] bg-cover bg-no-repeat "
        >
          <button class="w-4/5 h-10 mx-auto bg-pink-500 text-white underline font-extrabold rounded-full">
            Ver todos os acessórios
          </button>
        </div>
        {/* Segunda Imagem Title */}
        <div class="">
          <h1 class="text-2xl text-gray-800 text-center my-3">
            Comprando pelo App{" "}
            <p class="text-gray-900 font-extrabold">
              você ganha mais vantagens
            </p>
          </h1>
        </div>
        {/* Second Image Section */}
        <div class="w-full flex flex-row justify-center">
          <div class="w-1/2 ">
            <Image
              src="https://loja.bblend.com.br/arquivos/home-app-mob-op1-new.png?v=637819086935430000"
              alt="home app mobile"
              width={388}
              height={625}
            />
          </div>
          <div class="w-1/2 flex flex-col justify-center items-start ml-4">
            <div class=" text-left text-pink-500 font-bold text-sm">
              Promoções Exclusivas
            </div>
            <div class=" text-left text-pink-500 font-bold text-sm">
              Novidades especiais
            </div>
            <div class="text-left text-pink-500 font-bold text-sm">
              Montar sua caixa mix
            </div>
          </div>
        </div>
        <button class="w-4/5 h-10 rounded-lg bg-default text-sm mx-4 py-2 text-pink-700 border-pink-700 border-2 font-extrabold focus:outline-none focus:text-pink-900 focus:border-pink-900">
          Baixar App
        </button>
      </div>
      {/* Desktop */}
      <div class="w-full hidden lg:flex flex-col items-center mb-10 justify-center mt-10">
        {/* Title */}
        <div class="w-full flex flex-row">
          <div
            style="background-image: url('https://bblend.vteximg.com.br/arquivos/porta-capsula@2x.png');"
            class="flex-shrink-1 w-full max-w-[830px] inline z-0 min-h-[650px] bg-cover bg-no-repeat inline relative "
          >
          </div>
          <div class="my-4 w-full flex flex-col justify-center ml-10">
            <h1 class="text-2xl text-gray-800 text-center">
              Suas cápsulas ao lado de sua B.blend{" "}
              <span class="text-gray-900 font-extrabold">
                no maior estilo
              </span>
            </h1>
            <div class="md:flex lg:grid grid-cols-2 flex-row flex-wrap mt-4 flex-shrink-0 mr-20 gap-4">
              {products?.map((product, index) => (
                <div class="lg:w-96 block mb-6 flex-shrink-1">
                  <CapsuleCard product={product} />
                </div>
              ))}
            </div>
            <button class="w-4/5 h-10 mx-auto bg-pink-500 text-white underline font-extrabold rounded-full">
              Ver todos os acessórios
            </button>
          </div>
        </div>
        {/* Segunda Imagem Title */}
        <div class="w-full flex flex-row justify-center items-center mt-4">
          <div class="w-1/2 ">
            <div class="ml-4">
              <Image
                src="https://loja.bblend.com.br/arquivos/home-app-mob-op1-new.png?v=637819086935430000"
                alt="home app mobile"
                width={388}
                height={625}
              />
            </div>
          </div>
          <div class="w-1/2 flex flex-col justify-between gap-10">
            <h1 class="text-6xl text-gray-800 text-left my-3">
              Comprando pelo App{" "}
              <p class="text-gray-900 font-extrabold">
                você ganha mais vantagens
              </p>
            </h1>

            {/* Second Image Section */}

            <div class="w-full flex flex-row justify-start gap-6">
              <div class=" text-left text-pink-500 font-bold text-sm">
                Promoções <p>Exclusivas</p>
              </div>
              <div class=" text-left text-pink-500 font-bold text-sm">
                Novidades <p>especiais</p>
              </div>
            </div>
            <h1 class="text-left text-pink-500 font-bold text-sm">
              Montar sua <p>caixa mix</p>
            </h1>
            <a class="underline font-extrabold text-pink-500 text-left pt-10">
              Baixar App
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageFooter;

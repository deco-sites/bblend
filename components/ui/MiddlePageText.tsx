import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
export interface Props {
  title?: string;
  secondTitle?: string;
  description?: string;
}

function MiddlePageText({ title, secondTitle, description }: Props) {
  return (
    <div class="flex flex-col items-center justify-center w-full">
      {/* Main Title Div */}
      <div class="mb-6">
        <Text variant="heading-2" class="text-center">
          Sempre uma opção Ideal <p class="font-extrabold">para cada momento</p>
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
  );
}

export default MiddlePageText;

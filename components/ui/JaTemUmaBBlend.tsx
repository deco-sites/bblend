import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Button from "$store/components/ui/Button.tsx";
export interface Props {
  title?: string;
  secondTitle?: string;
  description?: string;
}

function JaTemUmaBBlend({ title, secondTitle, description }: Props) {
  return (
    <div class="flex flex-col items-center justify-center w-full bg-black">
      {/* Main Title Div */}
      <div class="flex flex-col items-center mb-6">
        <Text variant="heading-1" class="text-center text-red-500">
          Já tem
        </Text>
        <Text variant="heading-1" class="text-center text-white">
          uma
        </Text>
        <Text variant="heading-1" class="text-center text-white">
          B.blend?
        </Text>
        <Text variant="heading-3" class="text-white">
          Separamos alguns tópicos
        </Text>
        <Text variant="heading-3" class="text-white">que podem interessar</Text>
      </div>
      {/* Second Div */}
      <div class="flex flex-col items-center gap-2 mb-20 w-4/5">
        <div class="w-full min-w-full flex flex-col gap-2">
          <Button class="rounded-full bg-default ">
            Aprenda a instalar sua B.blend
          </Button>
          <Button class="rounded-full bg-default ">Comprar bebidas</Button>
          <Button class="rounded-full bg-default ">
            Comprar acessórios
          </Button>
          <Button class="rounded-full bg-default ">
            WhatsApp Atendimento
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JaTemUmaBBlend;

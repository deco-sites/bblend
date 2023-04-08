import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Container from "$store/components/ui/Container.tsx";
import CapsuleCard from "$store/components/product/CapsuleCard.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  products: LoaderReturnType<Product[] | null>;
}

function CapsuleShelfCategories({ products }: Props) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div class="w-full ">
      {/* Background Images */}
      <div class="absolute top-[396px] z-0">
        <Image
          src={"https://bblend.vteximg.com.br/arquivos/refri_3.png?v=637498588071800000"}
          alt={"background image"}
          width={244}
          height={322}
          class=""
        />
      </div>
      <div class="absolute top-[206px] z-0">
        <Image
          src={"https://bblend.vteximg.com.br/arquivos/refri_1.png?v=637498588065070000"}
          alt={"background image"}
          width={316}
          height={420}
          class=""
        />
      </div>
      <div class="absolute top-[460px] right-0 z-0">
        <Image
          src={"https://bblend.vteximg.com.br/arquivos/funcional_3.png?v=637498587867600000"}
          alt={"background image"}
          width={375}
          height={478}
          class=""
        />
      </div>
      <div class="hidden md:inline-block absolute bottom-[1070px] right-[-76px] z-0">
        <Image
          src={"https://bblend.vteximg.com.br/arquivos/suco_3.png?v=637498588108730000"}
          alt={"background image"}
          width={333}
          height={372}
          class=""
        />
      </div>
      <div class="flex flex-col lg:grid lg:grid-cols-2 lg:mx-16  lg:text-center xl:grid-cols-3 items-center justify-center w-full">
        {products?.map((product, index) => (
          <div class="w-full lg:w-96 mb-6 z-40">
            <CapsuleCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CapsuleShelfCategories;

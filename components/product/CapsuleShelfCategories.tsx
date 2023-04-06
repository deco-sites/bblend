import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Container from "$store/components/ui/Container.tsx";
import CapsuleCard from "$store/components/product/CapsuleCard.tsx";

export interface Props {
  products: LoaderReturnType<Product[] | null>;
}

function CapsuleShelfCategories({ products }: Props) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div class="flex flex-col lg:grid lg:grid-cols-2 lg:mx-16 xl:mx-4 lg:text-center xl:grid-cols-3 items-center justify-center w-full">
      {products?.map((product, index) => (
        <div class="w-full lg:w-96 mb-6 ">
          <CapsuleCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default CapsuleShelfCategories;

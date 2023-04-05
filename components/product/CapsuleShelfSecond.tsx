import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Container from "$store/components/ui/Container.tsx";
import CapsuleCard from "$store/components/product/CapsuleCard.tsx";

export interface Props {
  products: LoaderReturnType<Product[] | null>;
}

function CapsuleShelfSecond({ products }: Props) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div class="md:hidden flex flex-col lg:flex-row items-center justify-center w-full">
      {products?.map((product, index) => (
        <div class="w-full lg:w-96 mb-6">
          <CapsuleCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default CapsuleShelfSecond;

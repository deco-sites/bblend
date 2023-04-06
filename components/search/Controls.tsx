import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export type Categorie = {
  name: string;
  iconRef: string;
};

export interface Props {
  categories: Categorie[];
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return <div />;
}

function Controls(
  { page, categories }: { page: ProductListingPage; categories: Categorie[] },
) {
  const open = useSignal(false);
  const filters = page?.filters;
  const breadcrumb = page?.breadcrumb;
  const [filter, setFilter] = useState("Todas");

  return (
    <div class="flex flex-col mb-4 sm:gap-4 w-full max-w-full lg:pt-8 pt-0">
      <div class="flex flex-row w-full">
        <ul class="pb-3 w-full lg:pt-12 pt-1 min-w-full bg-gray-200 gap-1 lg:gap-3 flex flex-row lg:items-center lg:justify-center overflow-x-scroll xl:overflow-x-hidden">
          {categories.map((categorie) => (
            <>
              <li
                onClick={() => setFilter(categorie.name)}
                class={`${
                  filter === categorie.name
                    ? "bg-pink-600 text-white shadow-md rounded-lg"
                    : ""
                } max-h-[80px]  transition duration-500  text-gray-600 cursor-pointer w-12 px-10 py-4 lg:px-14 border-black flex flex-col items-center justify-center `}
              >
                <Icon
                  id="Instagram"
                  width={26}
                  height={26}
                  strokeWidth={1}
                />
                <p
                  class={`${
                    filter === categorie.name ? "text-white" : ""
                  } text-sm truncate`}
                >
                  {categorie.name}
                </p>
              </li>
              <span class="lg:border-r-1 border-black h-8 w-1 p-0"></span>
            </>
          ))}
        </ul>
      </div>

      <div
        key={filter}
        class="flex flex-row sm:gap-4 items-center lg:justify-center justify-between  md:border-none px-4 lg:w-full"
      >
        <h1
          class={`${
            filter === "Todas" ? "text-left" : "mx-auto"
          } inline-block lg:hidden font-extrabold text-pink-600 text-3xl`}
        >
          {filter === "Todas" ? "Bebidas" : ""}
          {filter === "Promoções" ? "Promoções" : ""}
          {filter === "Drinks" ? "Drinks" : ""}
          {filter === "Suco de Fruta" ? "Suco de Fruta" : ""}
          {filter === "Funcionais" ? "Funcionais" : ""}
          {filter === "Lácteos" ? "Lácteos" : ""}
          {filter === "Refrigerantes" ? "Refrigerantes" : ""}
          {filter === "Chás gelados" ? "Chás gelados" : ""}
          {filter === "Energy Drinks" ? "Energy Drinks" : ""}
        </h1>
        <div class="inline-block lg:hidden">
          {filter === "Todas" ? <Sort /> : ""}
        </div>
        <h1 class="hidden text-center lg:inline-block font-extrabold text-pink-600 text-3xl">
          {filter === "Todas" ? "Todas as bebidas" : ""}
          {filter === "Promoções" ? "Promoções" : ""}
          {filter === "Drinks" ? "Drinks" : ""}
          {filter === "Suco de Fruta" ? "Suco de Fruta" : ""}
          {filter === "Funcionais" ? "Funcionais" : ""}
          {filter === "Lácteos" ? "Lácteos" : ""}
          {filter === "Refrigerantes" ? "Refrigerantes" : ""}
          {filter === "Chás gelados" ? "Chás gelados" : ""}
          {filter === "Energy Drinks" ? "Energy Drinks" : ""}
        </h1>
      </div>
      <div class="hidden lg:inline-block flex w-11/12 text-right">
        {filter === "Todas" ? <Sort /> : ""}
      </div>
    </div>
  );
}

function SearchControls({ page, categories }: Props) {
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  return <Controls page={page} categories={categories} />;
}

export default SearchControls;

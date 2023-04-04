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

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return <div />;
}

function Controls({ page }: { page: ProductListingPage }) {
  const open = useSignal(false);
  const filters = page?.filters;
  const breadcrumb = page?.breadcrumb;

  return (
    <Container class="flex flex-col justify-between mb-4 md:mb-0 md:p-0 sm:gap-4 sm:flex-row sm:h-[53px] md:border-b-1">
      {console.log(page.products)}
      <div class="flex flex-row w-full">
        <ul class="w-full h-24 min-w-full bg-gray-200 gap-4 flex flex-row items-center overflow-x-scroll overflow-y-hidden p-0">
          <li class="w-1/4 px-10 rounded-lg flex flex-col items-center justify-center">
            <Icon
              class="text-default-inverse flex-shrink-0"
              width={32}
              height={32}
              id="Instagram"
              strokeWidth={1}
            >
            </Icon>
            Todas
          </li>
          <li class="w-16 px-10 rounded-lg flex flex-col items-center justify-center">
            <Icon
              class="text-default-inverse flex-shrink-0"
              width={32}
              height={32}
              id="Instagram"
              strokeWidth={1}
            >
            </Icon>
            Promoções
          </li>
          <li class="w-16 px-10 rounded-lg flex flex-col items-center justify-center">
            <Icon
              class="text-default-inverse flex-shrink-0"
              width={32}
              height={32}
              id="Instagram"
              strokeWidth={1}
            >
            </Icon>
            Drinks
          </li>
          <li class="w-16 px-10 rounded-lg flex flex-col items-center justify-center">
            <Icon
              class="text-default-inverse flex-shrink-0"
              width={32}
              height={32}
              id="Instagram"
              strokeWidth={1}
            >
            </Icon>
            Teste
          </li>
          <li class="w-16 px-10 rounded-lg flex flex-col items-center justify-center">
            <Icon
              class="text-default-inverse flex-shrink-0"
              width={32}
              height={32}
              id="Instagram"
              strokeWidth={1}
            >
            </Icon>
            Teste
          </li>
          <li class=" w-16 px-10 rounded-lg flex flex-col items-center justify-center">
            <Icon
              class="text-default-inverse flex-shrink-0"
              width={32}
              height={32}
              id="Instagram"
              strokeWidth={1}
            >
            </Icon>
            Teste
          </li>
          <li class="w-16 px-10 rounded-lg flex flex-col items-center justify-center">
            <Icon
              class="text-default-inverse flex-shrink-0"
              width={32}
              height={32}
              id="Instagram"
              strokeWidth={1}
            >
            </Icon>
            Teste
          </li>
        </ul>
      </div>
      {
        /* <div class="flex flex-row items-center sm:p-0 mb-2">
        <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
      </div> */
      }
      <div class="flex flex-row sm:gap-4 items-center justify-between  md:border-none px-4">
        {
          /* <Button
          variant="tertiary"
          onClick={() => {
            open.value = true;
          }}
        >
          Filtrar
          <Icon id="FilterList" width={16} height={16} />
        </Button> */
        }
        <Text class="font-extrabold text-pink-500">Bebidas</Text>
        <Sort />
      </div>

      <Modal
        title="Filtrar"
        mode="sidebar-right"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <Filters filters={filters} />
      </Modal>
    </Container>
  );
}

function SearchControls({ page }: Props) {
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  return <Controls page={page} />;
}

export default SearchControls;

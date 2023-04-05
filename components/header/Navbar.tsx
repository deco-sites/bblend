import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import { lazy, Suspense } from "preact/compat";
import { useUI } from "$store/sdk/useUI.ts";
import Loading from "$store/components/ui/Loading.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";
import { useState } from "preact/hooks";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  const [hideSearchBtn, setHideSearchBtn] = useState(true);
  const { displaySearchbar } = useUI();
  const handleClickOnSearch = (event: MouseEvent) => {
    console.log("CLICK");
  };
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`lg:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2`}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={126} height={16} />
        </a>
        <div class="rounded-bl-xl rounded-tr-xl border-x-1 border-pink-600">
          <a href="/maquinas" class="mx-2">
            Comprar Máquina
          </a>
        </div>
        <div class="flex gap-1 text-red-600 text-lg">
          <HeaderButton variant="search" />
          <HeaderSearchMenu searchbar={searchbar} />
          {/* <HeaderButton variant="cart" /> */}
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:flex flex-row items-center border-b-1 border-default w-full pl-2 pr-3 h-[80px] ">
        <div class="w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-44">
            <Icon id="Logo" width={126} height={16} />
          </a>
        </div>
        <div class="flex justify-start items-center">
          {items.map((item) => <NavItem item={item} />)}
          <button class="bg-red-500 text-white w-20 h-6 text-sm rounded-bl-xl rounded-tr-xl flex items-center justify-center">
            Empresas
          </button>
        </div>
        <div class="flex items-center ml-4 gap-2 mr-5">
          <HeaderSearchMenu searchbar={searchbar} />
          {!displaySearchbar.value && <HeaderButton variant="search" />}

          <div class="hidden lg:flex flex-row">
            <div>
              <p class="text-sm">
                Olá, <span class="font-extrabold text-sm">Visitante</span>
              </p>
              <Text variant="caption" class="text-xs">entrar/cadastrar</Text>
            </div>
            <Button
              as="a"
              variant="icon"
              href="/login"
              aria-label="Log in"
            >
              <Icon id="User" width={20} height={20} strokeWidth={0.4} />
            </Button>
            <HeaderButton variant="cart" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

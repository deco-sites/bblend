import { lazy, Suspense } from "preact/compat";

import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import Loading from "$store/components/ui/Loading.tsx";
import { headerHeight } from "$store/components/header/constants.ts";

const Searchbar = lazy(() => import("$store/components/search/Searchbar.tsx"));

interface Props {
  searchbar: SearchbarProps;
}

export default function HeaderSearchMenu({ searchbar }: Props) {
  const { displaySearchbar } = useUI();
  const open = displaySearchbar.value &&
    window?.matchMedia?.("(min-width: 268px)")?.matches;

  return (
    <div
      class={`${
        open ? "inline-block" : "hidden"
      } flex items-center z-[996] bg-white absolute left-0 lg:relative w-full`}
    >
      {open && (
        <Suspense fallback={<Loading />}>
          <Searchbar {...searchbar} variant="desktop" />
        </Suspense>
      )}

      {
        /* <div
        class={`${
          open ? "block border-t-1 border-default shadow" : "hidden"
        } flex items-center h-4/6 mt-2 absolute left-0 w-screen z-50 bg-white top-[${headerHeight}]`} */
      }
    </div>
  );
}

import { useMemo } from "preact/hooks";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { JSX } from "preact";

const SORT_QUERY_PARAM = "sort";

// TODO: The search query should also be from a commerce schema
const options = [
  { value: "", label: "Ordernar por" },
  { value: "name:asc", label: "Nome" },
  { value: "release:desc", label: "Lançamentos" },
  { value: "price:asc", label: "Menor Preço" },
  { value: "price:desc", label: "Maior Preço" },
  { value: "orders:desc", label: "Mais Vendidos" },
];

const useSort = () =>
  useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);

// TODO: Replace with "search utils"
const applySort = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  console.log(e.currentTarget.value);

  urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
  window.location.search = urlSearchParams.toString();
};

function Sort() {
  const sort = useSort();

  return (
    <select
      id="sort"
      name="sort"
      onInput={applySort}
      class="w-min h-[36px] px-1 rounded m-2 text-button font-button text-default hover:bg-hover cursor-pointer outline-none"
    >
      {options.map(({ value, label }) => (
        <option
          key={value}
          value={value}
          selected={value === sort}
          class="text-pink-500"
        >
          <Text class="text-pink-500">{label}</Text>
        </option>
      ))}
    </select>
  );
}

export default Sort;

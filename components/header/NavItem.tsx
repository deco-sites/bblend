import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  return (
    <li class="group flex items-center ">
      <a href={href} class="px-4 py-3">
        <Text
          class="border-x-1 border-pink-600 px-3 rounded-bl-xl rounded-tr-xl"
          variant="menu"
        >
          {label}
        </Text>
      </a>
    </li>
  );
}

export default NavItem;

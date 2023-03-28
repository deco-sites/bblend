import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function renderFirst(param: string, index: number) {
  switch (param) {
    case "Feminino":
      if (index === 0) {
        return "Bebidas";
      } else if (index === 1) {
        return "Caixa Mix";
      } else if (index === 2) {
        return "Máquinas";
      } else if (index === 3) {
        return "Acessórios";
      } else if (index === 4) {
        return "Combos";
      } else {
        break;
      }
    case "Masculino":
      if (index === 0) {
        return "Minhas Compras Programadas";
      } else if (index === 1) {
        return "Meu Perfil";
      } else if (index === 2) {
        return "Meus cartões";
      } else if (index === 3) {
        return "Endereços";
      } else if (index === 4) {
        return "Meus créditos";
      } else if (index === 5) {
        return "Meus pedidos";
      } else {
        break;
      }
    case "Sale":
      if (index === 0) {
        return "Indique e ganhe";
      } else if (index === 1) {
        return "Compra programada";
      } else {
        break;
      }
    case "Conheça mais":
      if (index === 0) {
        return "Loja";
      } else if (index === 1) {
        return "Blog";
      } else if (index === 2) {
        return "Sustentabilidade";
      } else if (index === 3) {
        return "Instalação";
      } else {
        break;
      }
  }
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <Text
      class="flex-grow min-h-[40px] flex items-center justify-start text-pink-600 font-extrabold"
      variant={level === 0 ? "menu" : "caption"}
    >
      {item.label}
    </Text>
  );

  return (
    <li>
      <div
        class={`flex justify-between items-center w-full py-2 ${
          level > 0 ? "pl-2" : ""
        }`}
        onClick={() => {
          if (hasChildren) open.value = !open.value;
        }}
      >
        {hasChildren
          ? title
          : <a class="w-full inline-block" href={item.href}>{title}</a>}

        {hasChildren && (
          <Button variant="icon">
            <Icon
              class={open.value === true ? "hidden" : "block"}
              id="ChevronDown"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
            <Icon
              class={open.value === true ? "block" : "hidden"}
              id="ChevronUp"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
          </Button>
        )}
      </div>

      {hasChildren && (
        <ul
          class={`flex-col  ${open.value === true ? "flex" : "hidden"}`}
        >
          <li>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="underline" variant="caption">
                {renderFirst(item.label, 0)}
              </Text>
            </a>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="underline" variant="caption">
                {renderFirst(item.label, 1)}
              </Text>
            </a>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="underline" variant="caption">
                {renderFirst(item.label, 2)}
              </Text>
            </a>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="underline " variant="caption">
                {renderFirst(item.label, 3)}
              </Text>
            </a>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="underline" variant="caption">
                {renderFirst(item.label, 4)}
              </Text>
            </a>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="underline" variant="caption">
                {renderFirst(item.label, 5)}
              </Text>
            </a>
          </li>
          {
            /* {item.children!.map((node) => (
            <MenuItem
              item={node}
              level={level + 1}
            />
          ))} */
          }
        </ul>
      )}
    </li>
  );
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="h-4/6 px-4 flex-grow flex flex-col divide-y divide-default overflow-y-scroll">
        {items.map((item) => <MenuItem item={item} />)}
      </ul>

      <div class="h-2/6 flex flex-col items-start py-2">
        <a
          class="flex items-center gap-4 px-4 py-2"
          href="https://www.deco.cx"
        >
          {/* <Icon id="Heart" width={20} height={20} strokeWidth={2} /> */}
          <Text variant="caption" class="underline font-light text-lg">
            Política de privacidade
          </Text>
        </a>
        <div class="w-5/6 self-center">
          <Button class="self-center w-full rounded-full bg-purple-600 mb-2">
            Monte sua Caixa Mix
          </Button>
          <Button class="self-center w-full rounded-full bg-pink-500 mb-2">
            B.blend para empresas
          </Button>
        </div>
        <div class="px-4">
          <p class="font-bold text-pink-600">Compre pelo APP</p>
          {/* Add App Store image in here */}
        </div>
      </div>
    </>
  );
}

export default Menu;

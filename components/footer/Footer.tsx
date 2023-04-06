import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";
import Image from "deco-sites/std/components/Image.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <h1 class="my-1">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </h1>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-gray-100 flex flex-col ">
      <div>
        <Container class="w-full flex flex-col ">
          <FooterContainer>
            {/* Desktop view */}
            <div class="hidden lg:block text-left w-full mb-4">
              <h1 class="text-left ml-10 text-xl text-black font-extrabold">
                B.blend
              </h1>
            </div>
            <div class="hidden lg:flex flex-row w-full justify-around ">
              <ul class="flex flex-row w-1/2 border-r-1 border-gray-300 justify-center">
                {sections.map((section) => (
                  <li class="mx-4">
                    <div>
                      <h1 class="font-extrabold">
                        {section.label}
                      </h1>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } pt-2`}
                      >
                        {section.children.map((item) => (
                          <li class="text-sm">
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
              <div class="w-1/2 flex flex-col">
                <div class="ml-28 mb-3">
                  <h1 class="font-extrabold text-left mb-3">Atendimento</h1>
                  <p class="text-left text-xs">
                    Telefone : (11) 3004-2277 Whatsapp: +55 11 98176-1117
                  </p>
                  <p class="text-left text-xs">
                    Segunda a sexta: 8h às 20h, Sábados: 8h às 14h. Exceto
                    Domingos e Feriados.
                  </p>
                </div>
                <Newsletter />
              </div>
            </div>

            {/* Mobile view */}
            <div class="flex lg:hidden flex-col w-full">
              <div class="flex flex-row justify-center w-full mb-4">
                <h1 class="text-center text-xl text-black font-extrabold">
                  B.blend
                </h1>
              </div>
              <ul class="w-full min-w-full flex flex-col gap-4">
                {sections.map((section) => (
                  <li class="">
                    <h1 class="">
                      <details class="">
                        <summary class="relative text-center font-bold">
                          {section.label}
                        </summary>

                        <ul
                          class={`flex mx-0 ${
                            isIcon(section.children[0])
                              ? "flex-row"
                              : "flex-col"
                          } gap-2 px-2 pt-2 w-full min-w-full bg-gray-300`}
                        >
                          {section.children.map((item) => (
                            <li class="cursor-pointer">
                              <SectionItem item={item} />
                            </li>
                          ))}
                        </ul>
                      </details>
                    </h1>
                  </li>
                ))}
              </ul>
              <FooterContainer>
                <Newsletter />
              </FooterContainer>
            </div>
          </FooterContainer>
        </Container>
      </div>
      <div>
        <Container class="w-full">
          <FooterContainer class="flex flex-col items-center justify-between w-full border-0 gap-4 font-bold">
            <div class="flex flex-col lg:flex-row justify-center items-center gap-5 lg:border-t-1 border-gray-200 py-4 w-full">
              <div class="flex flex-col">
                <h1 class="flex items-center gap-1">
                  Siga a B.blend
                </h1>

                <ul class="flex items-center justify-center gap-2">
                  <li>
                    <a
                      href="https://www.instagram.com/deco.cx"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Instagram"
                        strokeWidth={1}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.deco.cx/discord"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Facebook"
                        strokeWidth={5}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.deco.cx/discord"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Tiktok logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Tiktok"
                        strokeWidth={5}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col">
                <h1 class="flex items-center gap-1">
                  Aplicativos
                </h1>
                <ul class="flex items-center justify-center gap-2">
                  <li>
                    <a
                      href="https://www.instagram.com/deco.cx"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Instagram"
                        strokeWidth={1}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.deco.cx/discord"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Facebook"
                        strokeWidth={5}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col">
                <h1 class="flex items-center gap-1">
                  Formas de pagamento
                </h1>
                <ul class="flex items-center justify-center gap-2">
                  <li>
                    <a
                      href="https://www.instagram.com/deco.cx"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Mastercard"
                        strokeWidth={1}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.deco.cx/discord"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Visa"
                        strokeWidth={5}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.deco.cx/discord"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Elo"
                        strokeWidth={5}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.deco.cx/discord"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube logo"
                    >
                      <Icon
                        class=""
                        width={32}
                        height={32}
                        id="Pix"
                        strokeWidth={5}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-y-1 w-full py-2 flex flex-row items-center justify-center gap-2">
              <h1 class="flex items-center gap-1 mt-3 font-normal">
                Sua compra 100% segura
              </h1>
              <ul class="flex items-center justify-center gap-2 mb-3">
                <li>
                  <a
                    href="https://www.instagram.com/deco.cx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram logo"
                  >
                    <Image
                      class="border-1 border-blue-500"
                      src={"https://newimgebit-a.akamaihd.net/ebitBR/selo/img_102792.png"}
                      alt={"e bit"}
                      width={56}
                      height={76}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/deco.cx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram logo"
                  >
                    <Image
                      class="border-1 border-blue-500"
                      src={"https://s3.amazonaws.com/raichu-beta/selos/assets/images/bom.svg"}
                      alt={"reclame aqui"}
                      width={95}
                      height={94}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <h1 class="flex items-center justify-center gap-1 mt-3 text-center font-normal">
              B.BLEND MÁQUINAS E BEBIDAS S.A | CNPJ: 22.172.203/0001-06 | IE:
              144.438.810.115
            </h1>
            <h1 class="flex items-center justify-center gap-1 mt-3 text-center font-normal">
              A venda e o consumo de bebida alcoólica são proibidos para
              menores, beba com moderação, se for dirigir não beba.
            </h1>
          </FooterContainer>
        </Container>
        <div class="pt-3 bg-gray-200 flex justify-center items-center">
          <p class="bg-gray-200 pb-3 text-gray-400 font-bold">
            Copyright B.blend 2023 - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

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
    <Text variant="caption" tone="default-inverse">
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
    </Text>
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
    <footer class="w-full  bg-footer flex flex-col divide-y-1 divide-default">
      <div>
        <Container class="w-full flex flex-col divide-y-1 divide-default">
          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20">
              {sections.map((section) => (
                <li>
                  <div>
                    <Text
                      variant="heading-3"
                      tone="section-title"
                      class=""
                    >
                      {section.label}
                    </Text>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <div class="flex flex-row justify-center w-full mb-4">
              <Text
                variant="heading-2"
                tone="default-inverse"
                class="text-center"
              >
                B.blend
              </Text>
            </div>
            <ul class="w-full min-w-full flex flex-col gap-4">
              {sections.map((section) => (
                <li class="mx-auto">
                  <Text variant="body" tone="default-inverse">
                    <details>
                      <summary class="">
                        {section.label}
                      </summary>

                      <ul
                        class={`flex mx-0 ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 px-2 pt-2 w-full min-w-full bg-black`}
                      >
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </Text>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </Container>
      </div>
      <FooterContainer>
        <Newsletter />
      </FooterContainer>
      <div>
        <Container class="w-full">
          <FooterContainer class="flex flex-col items-center justify-between w-full border-0 gap-4">
            <Text
              class="flex items-center gap-1"
              variant="body"
              tone="default-inverse"
            >
              Siga a B.blend
            </Text>

            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default-inverse"
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
                    class="text-default-inverse"
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
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Tiktok"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
            <Text
              class="flex items-center gap-1"
              variant="body"
              tone="default-inverse"
            >
              Aplicativos
            </Text>
            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default-inverse"
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
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Facebook"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
            <Text
              class="flex items-center gap-1"
              variant="body"
              tone="default-inverse"
            >
              Formas de pagamento
            </Text>
            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default"
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
                    class="text-default-inverse"
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
                    class="text-default-inverse"
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
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Pix"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
            <div class="border-y-1 w-4/5 flex flex-col items-center gap-2">
              <Text
                class="flex items-center gap-1 mt-3"
                variant="body"
                tone="default-inverse"
              >
                Sua compra 100% segura
              </Text>
              <ul class="flex items-center justify-center gap-2 mb-3">
                <li>
                  <a
                    href="https://www.instagram.com/deco.cx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram logo"
                  >
                    <Icon
                      class="text-default"
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
                      class="text-default-inverse"
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
                      class="text-default-inverse"
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
                      class="text-default-inverse"
                      width={32}
                      height={32}
                      id="Pix"
                      strokeWidth={5}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <Text
              class="flex items-center justify-center gap-1 mt-3 text-center"
              variant="body"
              tone="default-inverse"
            >
              B.BLEND MÁQUINAS E BEBIDAS S.A | CNPJ: 22.172.203/0001-06 | IE:
              144.438.810.115
            </Text>
            <Text
              class="flex items-center justify-center gap-1 mt-3 text-center"
              variant="body"
              tone="default-inverse"
            >
              A venda e o consumo de bebida alcoólica são proibidos para
              menores, beba com moderação, se for dirigir não beba.
            </Text>
          </FooterContainer>
        </Container>
        <div class="pt-3 bg-gray-100 flex justify-center items-center">
          <p class="bg-gray-100 pb-3">
            Copyright B.blend 2023 - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

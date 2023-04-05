import Image from "deco-sites/std/components/Image.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label?: string;
}

export interface Props {
  highlights?: Highlight[];
  title?: string;
  footerTitle?: string;
  footerRef?: string;
}

function Highlights({ highlights = [], title, footerTitle, footerRef }: Props) {
  return (
    <Container class="grid grid-cols-1 grid-rows-[48px_1fr]">
      <h2 class="text-center">
        <Text variant="heading-3" class="text-pink-700 font-extrabold mb-2">
          {title}
        </Text>
      </h2>

      <Slider
        class="gap-6"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {highlights.map(({ href, src, alt, label }) => (
          <a
            href={href}
            class="flex flex-col gap-4 items-center min-w-[80px]"
          >
            <Image
              class="rounded-full"
              src={src}
              alt={alt}
              width={80}
              height={80}
            />
            <Text variant="body">{label}</Text>
          </a>
        ))}
      </Slider>
      <a
        href={footerRef}
        class="hidden md:block text-center font-extrabold underline text-pink-700 pt-12"
      >
        {footerTitle}
      </a>
    </Container>
  );
}

export default Highlights;

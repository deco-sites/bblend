import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  slides: string[];
}
export default function Carousel({ slides }: Props) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div class="overflow-hidden relative">
      <div
        class="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s) => (
          <Image src={s} alt={"image"} height={300} width={300} />
        ))}
      </div>
      <div class="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          class="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
        >
          <Icon id={"ChevronLeft"} width={40} height={40} strokeWidth={0.01} />
        </button>
        <button
          onClick={next}
          class="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
        >
          <Icon id={"ChevronRight"} width={40} height={40} strokeWidth={0.01} />
        </button>
      </div>
      <div class="absolute bottom-4 right-0 left-0">
        <div class="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              class={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

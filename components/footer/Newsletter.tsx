import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col items-center justify-center gap-5">
      <div class="flex flex-col gap-2 items-center max-w-[400px] font-bold">
        Cadastre-se
      </div>
      <form class="flex flex-col gap-4 font-body text-body w-2/5">
        <input
          class="py-2 px-3 flex-grow  h-[60px] rounded-full text-gray-300 font-extrabold border-1 border-default outline-none"
          placeholder="Nome"
        />
        <input
          class="py-2 px-3 flex-grow  h-[60px] rounded-full text-gray-300 font-extrabold border-1 border-default outline-none"
          placeholder="Whatsapp"
        />
        <input
          class="py-2 px-3 flex-grow  h-[60px] rounded-full text-gray-300 font-extrabold border-1 border-default outline-none"
          placeholder="E-mail"
        />
        <button
          class="py-2 px-3 bg-black font-extrabold text-white rounded-full w-2/5 mx-auto"
          type="bgutton" // prevent form's default behavior
        >
          enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;

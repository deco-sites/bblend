import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-20">
      <div class="flex flex-col gap-2 items-center max-w-[400px]">
        Cadastre-se
      </div>
      <form class="flex flex-col gap-4 font-body text-body w-4/5">
        <input
          class="py-2 px-3 flex-grow bg-footer h-[60px] rounded-full text-default-inverse border-1 border-default"
          placeholder="Nome"
        />
        <input
          class="py-2 px-3 flex-grow bg-footer h-[60px] rounded-full text-default-inverse border-1 border-default"
          placeholder="Whatsapp"
        />
        <input
          class="py-2 px-3 flex-grow bg-footer h-[60px] rounded-full text-default-inverse border-1 border-default"
          placeholder="E-mail"
        />
        <button
          class="py-2 px-3 bg-interactive-inverse rounded w-2/5 mx-auto"
          type="bgutton" // prevent form's default behavior
        >
          enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;

import { SectionTitle } from "../section-title";

export const ContactForm = () => {
  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em Contato"
          className="items-center text-center"
        />

        <form className="mt-12 w-full flex flex-col gap-4">
          <input />
        </form>
      </div>
    </section>
  );
};

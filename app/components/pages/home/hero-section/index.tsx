import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandYoutube,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/jonathabot",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/jonathabotelho/",
    icon: <TbBrandLinkedin />,
  },
  // {
  //   url: "https://github.com.br",
  //   icon: <TbBrandYoutube />,
  // },
  // {
  //   url: "https://github.com.br",
  //   icon: <TbBrandWhatsapp />,
  // },
];

const MOCK_KNOWN_TECHS = [
  "Next.js",
  "React.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-40 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Jonatha Botelho</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou um Desenvolvedor Front-end Júnior com habilidade técnica e profissional em tecnologias 
            como Next.js, React.JS, TypeScript, JavaScript. Utilizo bibliotecas React e realizo consumo de API’s públicas 
            e privadas e possuo conhecimento em estrutura e funcionamento 
            de Banco de Dados MySQL. Estou sempre aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {MOCK_KNOWN_TECHS.map((tech: any, index: number) => (
              <TechBadge name={tech} key={index} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em Contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Jonatha Botelho"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

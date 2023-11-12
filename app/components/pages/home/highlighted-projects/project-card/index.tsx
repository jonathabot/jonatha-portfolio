import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="Thumbnail de projeto BookWise"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          BookWise
        </h3>

        <p className="text-gray-400 my-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores placeat est ea, itaque odio, sed officia praesentium, debitis voluptates neque recusandae totam deserunt perspiciatis in eaque optio corporis illum temporibus omnis. Fugit alias officiis velit molestias, sequi est ipsum similique saepe quas aliquid blanditiis recusandae ratione reprehenderit magnam quis iusto.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
            <TechBadge name="Next.js"/>
            <TechBadge name="Next.js"/>
            <TechBadge name="Next.js"/>
            <TechBadge name="Next.js"/>
            <TechBadge name="Next.js"/>
        </div>

        <Link href="/projects/book-wise">
            Ver Projeto
            <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

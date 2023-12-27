import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import ButtonActivate from "./ButtonActivate";
import ArrowLeft from "@/app/assets/arrow-ios-forward-fill.svg";

interface CardProjectsProps {
  projectName: string;
  ubicationProyect: string;
  srcImageProject: StaticImageData;
  altImageProject: string;
  typeProject: string;
  priceProject: string;
  urlProject: string;
}

export default function CardProjects({
  projectName,
  ubicationProyect,
  srcImageProject,
  altImageProject,
  typeProject,
  priceProject,
  urlProject,
}: CardProjectsProps) {
  return (
    <Card
      isFooterBlurred
      className=" w-80 h-[300px] col-span-12 sm:col-span-5 "
    >
      <CardHeader className="absolute z-10 top-0 flex-col items-start bg-armadillo/50">
        <p className="text-tiny text-white bg-tussock px-2 py-1 rounded-md uppercase font-bold mb-1">
          {" "}
          {ubicationProyect}
        </p>
        <h4 className="text-white rounded-md font-medium text-2xl">
          {projectName}
        </h4>
      </CardHeader>
      <Image
        alt={altImageProject}
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={srcImageProject}
      />
      <CardFooter className="absolute bg-armadillo/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white text-base">{priceProject}</p>
          <p className="text-white text-tiny">{typeProject}</p>
        </div>
        <ButtonActivate text="Ver más" icon={ArrowLeft} url={urlProject} />
      </CardFooter>
    </Card>
  );
}

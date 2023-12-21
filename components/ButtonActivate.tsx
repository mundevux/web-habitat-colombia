import { Button } from "@nextui-org/react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  icon?: string;
}

const ButtonActivate = ({ text, icon }: ButtonProps) => {
  return (
    <Button className=" bg-tussock text-white text-base lg:text-lg font-normal">
      {text}
      {icon && (
        <Image src={icon} alt="Icono de Flecha" width={16} height={16} />
      )}
    </Button>
  );
};

export default ButtonActivate;

import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  icon?: string;
  url: string;
}

const ButtonDeactivate = ({ text, icon, url }: ButtonProps) => {
  return (
    <Link href={url}>
      <Button className="bg-trasnparent border-2 border-tussock hover:bg-tussock hover:transition-colors text-white text-base lg:text-lg font-normal w-full">
        {text}
        {icon && (
          <Image src={icon} alt="Icono de Flecha" width={16} height={16} />
        )}
      </Button>
    </Link>
  );
};

export default ButtonDeactivate;

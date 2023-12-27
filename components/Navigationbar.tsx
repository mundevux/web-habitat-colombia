"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LogoHabitat from "@/app/assets/Logo_Habitat_Horizontal.svg";
import Image from "next/image";

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Proyectos", "Nosotros", "Contacto"];

  const getHref = (item: string) => {
    switch (item) {
      case "Proyectos":
        return "/projects";
      case "Nosotros":
        return "/about-us";
      case "Contacto":
        return "/contact";
      default:
        return "/";
    }
  };
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-slate-500/50">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="flex justify-end sm:justify-start">
          <Link href="/">
            <Image
              src={LogoHabitat}
              alt="Logo Habitat Colombia SAS"
              width={180}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/projects" className=" text-white">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about-us" className=" text-white">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className=" text-white">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-slate-900 "
              href={getHref(item)}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

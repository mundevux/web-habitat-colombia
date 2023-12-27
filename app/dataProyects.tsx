import IconGimnasio from "@/app/assets/Gimnasio-apartamento.png";
import IconParqueInfantil from "@/app/assets/Salon-de-ninos-apartamento.png";
import IconSalonSocial from "@/app/assets/Salon-social-apartamento.png";
import IconBusinessCenter from "@/app/assets/Business-center-apartamento.png";
import IconLudoteca from "@/app/assets/Ludoteca-apartamento.png";
import IconPiscina from "@/app/assets/Piscina-apartamento.png";
import IconTerrazaComunal from "@/app/assets/Terraza-comunal-apartamento.png";
import IconFogata from "@/app/assets/Zona-de-fogatas-apartamento.png";
import IconCoffeeWork from "@/app/assets/Coffee-Work-apartamento.png";
import IconZonaTrote from "@/app/assets/Zona-de-trote-apartamento.png";
import logoDanubio from "@/app/assets/Cerasus_Danubio/Logo_Cerasus_Danubio.png";
import fachadaDanubio from "@/app/assets/Cerasus_Danubio/Fachada_Cerasus_Danubio.webp";
import logoCerasusSextaEntrada from "@/app/assets/Cerasus_Sexta_Entrada/Logo_Cerasus_Sexta_Entrada.png";
import fachadaCerasusSextaEntrada from "@/app/assets/Cerasus_Sexta_Entrada/Fachada_Cerasus_Sexta_Entrada.webp";
import logoPrunusSextaEntrada from "@/app/assets/Prunus_Sexta_Entrada/Logo_Prunus_Sexta_Entrada.png";
import fachadaPrunusSextaEntrada from "@/app/assets/Prunus_Sexta_Entrada/Fachada_Prunus_Sexta_Entrada.webp";

const projects = [
  {
    id: 1,
    name: "Cerasus Danubio",
    price: "Desde $202.953.600",
    area: "Desde 33 m2",
    ubication: "Usme, Bogotá.",
    city: "Bogotá",
    type: "vis",
    descriptionType: "Vivienda de interés social",
    logo: logoDanubio,
    fachada: fachadaDanubio,
    fachadaAlt: "Fachada Proyecto Cerasus Danubio",
    logoAlt: "Logo Proyecto Cerasus Danubio",
    link: "/projects/cerasus-danubio",
    note: "*Precio de 150 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Zona de Fogata",
        icon: IconFogata,
      },
      {
        name: "Coffee Work",
        icon: IconCoffeeWork,
      },
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
      {
        name: "Terraza comunal",
        icon: IconTerrazaComunal,
      },
      {
        name: "Luoteca",
        icon: IconLudoteca,
      },
    ],
  },
  {
    id: 2,
    name: "Cerasus Sexta Entrada",
    price: "Desde $104.400.000",
    area: "Desde 46 m2",
    ubication: "Malambo, Atlántico.",
    city: "Malambo",
    type: "vip",
    descriptionType: "Vivienda de interés prioritario",
    logo: logoCerasusSextaEntrada,
    fachada: fachadaCerasusSextaEntrada,
    fachadaAlt: "Fachada Cerasus Sexta Entrada",
    logoAlt: "Logo Cerasus Sexta Entrada",
    link: "/projects/cerasus-sexta-entrada",
    note: "*Precio de 90 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Piscina",
        icon: IconPiscina,
      },
      {
        name: "Gimnasio",
        icon: IconGimnasio,
      },
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
    ],
  },
  {
    id: 3,
    name: "Prunus Sexta Entrada",
    price: "Desde $133.400.00",
    area: "Desde 53 m2",
    ubication: "Malambo, Atlántico.",
    city: "Malambo",
    type: "vis",
    descriptionType: "Vivienda de interés social",
    logo: logoPrunusSextaEntrada,
    fachada: fachadaPrunusSextaEntrada,
    fachadaAlt: "Fachada Prunus Sexta Entrada",
    logoAlt: "Logo Prunus Sexta Entrada",
    link: "/projects/prunus-sexta-entrada",
    note: "*Precio de 115 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Piscina",
        icon: IconPiscina,
      },
      {
        name: "Gimnasio",
        icon: IconGimnasio,
      },
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
    ],
  },
];

export default projects;

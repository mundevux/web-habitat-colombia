import Navigationbar from "@/components/Navigationbar";
import ButtonActivate from "@/components/ButtonActivate";
import ButtonDeactivate from "@/components/ButtonDeactivate";
import ArrowLeft from "@/app/assets/arrow-ios-forward-fill.svg";
import FachadaDanubio from "@/app/assets/Fachada_Cerasus_Danubio.webp";
import Image from "next/image";
import { Card, CardHeader, CardFooter } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <header className="fixed w-full z-20 top-0 start-0">
        <Navigationbar />
      </header>
      <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1561143915-75f4d11a8dd0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl  text-center py-32 lg:py-56">
          <p className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Construyendo Hogares de Calidad en Colombia
          </p>
          <p className="mb-8 text-sm sm:text-base font-normal text-gray-300 lg:text-lg ">
            En Habitat Colombia, nos comprometemos a crear espacios que reflejen
            tus sueños. Nuestra pasión por la excelencia en diseño, construcción
            sostenible y atención al detalle nos distingue. Descubre cómo
            podemos convertir tus ideas en realidad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonActivate text="Contáctanos" icon={ArrowLeft} />
            <ButtonDeactivate text="Ver proyectos" icon={ArrowLeft} />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="max-w-screen-xl px-4 py-16">
          <p className=" text-2xl md:text-3xl lg:text-4xl font-light mb-4">
            Nuestros{" "}
            <span className=" font-medium text-tussock">Proyectos</span>
          </p>
          <Card
            isFooterBlurred
            className="w-[350px] h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-tussock uppercase font-bold">
                {" "}
                Usme, Bogotá.
              </p>
              <h4 className=" text-armadillo font-medium text-2xl">
                Cerasus Danubio
              </h4>
            </CardHeader>
            <Image
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={FachadaDanubio}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Proyecto de vivienda VIS</p>
                <p className="text-black text-tiny">Desde $150.000.000</p>
              </div>
              <ButtonActivate text="Ver más" icon={ArrowLeft} />
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

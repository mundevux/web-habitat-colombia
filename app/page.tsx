import Navigationbar from "@/components/Navigationbar";
import ButtonActivate from "@/components/ButtonActivate";
import ButtonDeactivate from "@/components/ButtonDeactivate";
import ArrowLeft from "@/app/assets/arrow-ios-forward-fill.svg";

export default function Home() {
  return (
    <main>
      <header className="fixed w-full z-20 top-0 start-0">
        <Navigationbar />
      </header>
      <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1561143915-75f4d11a8dd0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl  text-start py-24 lg:py-56">
          <p className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Construyendo Hogares de Calidad en Colombia
          </p>
          <p className="mb-8 text-base font-normal text-gray-300 lg:text-lg sm:pr-16 lg:pr-56">
            En Habitat Colombia, nos comprometemos a crear espacios que reflejen
            tus sueños. Nuestra pasión por la excelencia en diseño, construcción
            sostenible y atención al detalle nos distingue. Descubre cómo
            podemos convertir tus ideas en realidad.
          </p>
          <div className="flex flex-col sm:flex-row ">
            <ButtonActivate text="Contáctanos" icon={ArrowLeft} />
            <ButtonDeactivate text="Ver proyectos" icon={ArrowLeft} />
          </div>
        </div>
      </section>
    </main>
  );
}

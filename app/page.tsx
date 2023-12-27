import ButtonActivate from "@/components/ButtonActivate";
import ButtonDeactivate from "@/components/ButtonDeactivate";
import ArrowLeft from "@/app/assets/arrow-ios-forward-fill.svg";
import CardProjects from "@/components/CardProjects";
import DataProjects from "@/app/dataProyects";
import { ProjectsManagementIcon } from "@/components/ProjectsManagementIcon";
import { ArchitectureIcon } from "@/components/ArchitectureIcon";
import { SustainabilityIcon } from "@/components/SustainabilityIcon";
import { InvestmentIcon } from "@/components/InvestmentIcon";
import ServicesCard from "@/components/ServicesCard";

export default function Home() {
  const services = [
    {
      icon: ProjectsManagementIcon,
      title: "Comercializacion de proyectos",
      paragraph:
        "Con más de 10 años de experiencia en la comercialización de vivienda en Colombia. Contamos con un equipo de profesionales que te ayudarán a encontrar la vivienda que necesitas, al mejor precio.",
    },
    {
      icon: ArchitectureIcon,
      title: "Diseño y construcción personalizados",
      paragraph:
        "Diseñamos y construimos viviendas sociales y prioritarias a tu medida. Creemos que cada familia merece tener un hogar que se adapte a sus necesidades y presupuesto.",
    },
    {
      icon: SustainabilityIcon,
      title: "Construcción sostenible y eficiente",
      paragraph:
        "Construimos viviendas de manera sostenible y eficiente. Utilizamos materiales y técnicas que minimizan el impacto ambiental y reducen los costos de operación.",
    },
    {
      icon: InvestmentIcon,
      title: "Asesoramiento y financiamiento",
      paragraph:
        "Te asesoramos y ayudamos a encontrar el mejor financiamiento para tu vivienda social o prioritaria. Contamos con un equipo de expertos que te guiarán en todo el proceso.",
    },
  ];

  return (
    <main>
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
            <ButtonActivate
              text="Contáctanos"
              icon={ArrowLeft}
              url="/contact"
            />
            <ButtonDeactivate
              text="Ver proyectos"
              icon={ArrowLeft}
              url="/projects"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <div className=" mb-10">
            <p className=" text-3xl md:text-3xl lg:text-4xl font-normal text-armadillo">
              Descubre nuestros{" "}
              <span className=" font-semibold text-tussock">Proyectos</span>
            </p>
            <p className="text-base md:text-lg lg:text-xl text-armadillo">
              Viviendas que se adaptan a tus sueños.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
            {DataProjects.map((dataProjects, index) => (
              <div key={index}>
                <CardProjects
                  projectName={dataProjects.name}
                  ubicationProyect={dataProjects.ubication}
                  altImageProject={dataProjects.fachadaAlt}
                  srcImageProject={dataProjects.fachada}
                  typeProject={dataProjects.descriptionType}
                  priceProject={dataProjects.price}
                  urlProject={dataProjects.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <div className=" mb-10">
            <p className=" text-3xl md:text-3xl lg:text-4xl font-normal text-armadillo">
              Nuestros{" "}
              <span className=" font-semibold text-tussock">Servicios</span>
            </p>
            <p className="text-base md:text-lg lg:text-xl text-armadillo">
              Brindándote soluciones integrales.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 text-armadillo">
            {services.map((services, index) => (
              <div key={index}>
                <ServicesCard
                  servicesIcon={<services.icon />}
                  titleServices={services.title}
                  paragraphServices={services.paragraph}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

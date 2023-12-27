interface ServicesCarProps {
  servicesIcon: JSX.Element;
  titleServices: string;
  paragraphServices: string;
}

export default function ServicesCard({
  servicesIcon,
  titleServices,
  paragraphServices,
}: ServicesCarProps) {
  return (
    <div className=" border-t-2 border-armadillo/50 hover:border-tussock transition-colors pt-5 mx-3">
      <div className="flex items-center mb-5">
        <div className=" text-tussock w-12 md:w-20 mr-2">{servicesIcon}</div>
        <h2 className=" text-lg md:text-xl font-medium">{titleServices}</h2>
      </div>
      <div>
        <p className="">{paragraphServices}</p>
      </div>
    </div>
  );
}

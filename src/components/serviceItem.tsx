interface serviceItemProps {
  title: string;
  desc: string;
}

function ServiceItem({ title, desc }: serviceItemProps) {
  return (
    <div className="service">
      <h3 className="text-xl pb-4 font-bold leading-none m-0">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default ServiceItem;

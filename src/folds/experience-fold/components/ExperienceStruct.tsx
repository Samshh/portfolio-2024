interface ExperienceStructProps {
  title: string;
  role: string;
  subtitle?: string;
}


export default function ExperienceStruct({title, role, subtitle}: ExperienceStructProps) {
  return (
    <div className="py-[0.5rem] flex flex-col gap-[0.25rem]">
      <h4 className="font-normal">{title}<span className="text-[#333333]">.</span></h4>
      <em>
        <h6 className="font-light">
          {role}
        </h6>
      </em>
      <h6 className="font-light">
        {subtitle}
      </h6>
    </div>
  );
}

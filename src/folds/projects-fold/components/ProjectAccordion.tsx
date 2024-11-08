import React, { forwardRef } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";

interface ProjectAccordionProps {
  value: string;
  title: string;
  role: string;
  children: React.ReactNode;
  link: string;
  linkLabel: string;
  techStack: { icon: string; label: string; iconSize?: string }[];
  isExternalLink?: boolean;
}

const ProjectAccordion = forwardRef<HTMLDivElement, ProjectAccordionProps>(
  (
    {
      value,
      title,
      role,
      children,
      link,
      linkLabel,
      techStack,
      isExternalLink = true,
    },
    ref
  ) => {
    return (
      <AccordionItem value={value} ref={ref}>
        <AccordionTrigger>
          <h4 className="font-normal hoverable">
            {title}
            <span className="text-[#333333]">.</span>
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-[1rem]">
            <em>
              <div className="flex flex-col items-start md:items-center md:justify-between md:flex-row gap-4">
                <h6 className="font-light">Role: {role}</h6>
                <a
                  href={link}
                  target={isExternalLink ? "_blank" : "_self"}
                  rel={isExternalLink ? "noopener" : ""}
                  title={linkLabel}
                >
                  <div className="hoverable flex items-center justify-end">
                    <h6 className="font-light">{linkLabel}</h6>
                    <Icon className="text-3xl" icon="guidance:up-right-arrow" />
                  </div>
                </a>
              </div>
            </em>
            <div className="flex justify-start items-start">
              <h6 className="font-light md:w-1/2">{children}</h6>
            </div>
            <div className="flex flex-wrap gap-[1rem] justify-start items-center">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="bg-[#0c0c0c] border border-[#333333] px-[1rem] py-[0.25rem] flex justify-center items-center gap-[0.5rem]"
                >
                  <Icon
                    className={`text-[${tech.iconSize || "20px"}]`}
                    icon={tech.icon}
                  />
                  <p className="text-[1rem]">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }
);

export default ProjectAccordion;

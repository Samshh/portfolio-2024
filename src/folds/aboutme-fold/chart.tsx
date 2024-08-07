"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGradientText } from "@/animations/useGradientText";

const languageData = [
  { language: "TS", usage: 52.17 },
  { language: "JS", usage: 21.33 },
  { language: "Java", usage: 18.68 },
  { language: "Python", usage: 6.57 },
  { language: "C++", usage: 1.25 },
];

const chartConfig = {
  usage: {
    label: "Usage",
    color: "#e7e7e7",
  },
  proficiency: {
    label: "Skill",
    color: "#e7e7e7",
  },
} satisfies ChartConfig;

export function Component() {
  const text = useGradientText();
  return (
    <div className="md:grid-cols-2 md:grid flex flex-col items-center justify-center gap-[1rem]">
      <CardContent className="border border-[#333333] rounded-lg p-[15px] w-full">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={languageData}>
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="language" />
            <PolarGrid />
            <Radar
              dataKey="usage"
              fill="#238cc8"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center justify-center gap-2 font-medium mx-auto">
            Language usage
          </div>
        </CardFooter>
      </CardContent>
      <div className="border border-[#333333] rounded-lg p-[15px] w-full h-full flex flex-col justify-end">
        <div className="flex justify-center items-center h-full">
          <p className="lg:text-[3.5rem] md:text-[3rem] text-[3.5rem] font-bold text-[#333333]">
            <span ref={text}>27.3</span>k
          </p>
        </div>
        <CardFooter className="text-sm">
          <div className="flex items-center justify-center font-medium mx-auto">
            Lines of code written
          </div>
        </CardFooter>
      </div>
    </div>
  );
}

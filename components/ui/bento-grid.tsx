import { cn } from "@/lib/utils";
import { small } from "framer-motion/client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  src
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  src: string
}) => {
  return (
    <div
      className={cn(
        "z-20 row-span-1 rounded-xl group/bento hover:shadow-orange-800/20 hover:shadow-lg transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 p-2 transition duration-200">
        {icon}
        <div className="text-2xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="text-md font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
          <Link className="mt-2 w-fit flex group " href={src}><span className="transition-all duration-200 hover:underline hover:underline-offset-2">Track</span> <ExternalLink className="ml-1 mt-1 transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500" size={13} /></Link>
      </div>
    </div>
  );
};

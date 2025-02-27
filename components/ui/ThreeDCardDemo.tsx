"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";

interface CardProps {
    group: string;
    src: string;
}

export function ThreeDCardDemo({src,group}: CardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="transition duration-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] bg-zinc-900 w-auto sm:w-[25rem] h-auto rounded-2xl p-6  border-2 border-amber-900">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          {group}
        </CardItem>
        {/* <CardItem
          
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem
          translateZ="50"
          rotateX={5}
          rotateZ={0}
          className="w-full mt-4"
        >
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center gap-x-5 items-center mt-5">
          <CardItem
            translateZ={30}
            as="button"
            className=" cursor-pointer px-4 py-2 rounded-xl text-lg font-normal bg-orange-800 hover:bg-orange-900 hover:-translate-y-1"
          >
           <Link href={`/log/${group}`}>Log your lift</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

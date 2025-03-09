"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { SkeletonFive, SkeletonFour, SkeletonOne, SkeletonThree, SkeletonTwo } from "../skeletons/Skeletons";

import { Dumbbell, ArrowLeft, Footprints, Hand, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Chest Workout",
    description: (
      <span className="text-sm">
        Build a stronger chest with targeted exercises.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <Dumbbell className="h-4 w-4" />, // Chest-focused icon
    src: "/log/Chest",
  },
  {
    title: "Back Training",
    description: (
      <span className="text-sm">
        Strengthen your back for better posture and power.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <ArrowLeft className="h-4 w-4" />, // Back workout-related icon
    src: "log//Back",
  },
  {
    title: "Leg Day Essentials",
    description: (
      <span className="text-sm">
        Improve lower body strength with key leg exercises.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <Footprints className="h-4 w-4" />, // Running/leg day icon
    src: "/log/Legs",
  },
  {
    title: "Arm & Biceps Training",
    description: (
      <span className="text-sm">
        Sculpt powerful arms with biceps and triceps workouts.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Hand className="h-4 w-4" />, // Flexed bicep icon
    src: "/log/Arms",
  },
  {
    title: "Shoulder & Upper Body",
    description: (
      <span className="text-sm">
        Build strong and broad shoulders for a balanced physique.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <ShieldCheck className="h-4 w-4" />, // Shoulder/upper body-related icon
    src: "/log/Shoulders",
  },
];

export function BentoTrackerCards() {
  return (
    <BentoGrid className="p-4 md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
          src = {item.src}
        />
      ))}
    </BentoGrid>
  );
}
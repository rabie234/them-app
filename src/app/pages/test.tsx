/* eslint-disable react/no-unescaped-entities */

"use client";
import { Chart_Bar } from "@/components/charts/bar-charts";
import { Chart_Radar } from "@/components/charts/radar-chart";
import { ModeToggle } from "@/components/switch-theme-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Dialog } from "@radix-ui/react-dialog";
import { useState } from "react";

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative w-full h-full w-full h-screen  stal overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
      }}
    >
      {/* Content inside the slanted polygon, if needed */}
    </div>
  );
}

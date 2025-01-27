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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex flex-col ">
      <div className=" flex w-full gap-5 flex-row justify-between items-center p-4">
        <Chart_Bar />
        <Chart_Radar />
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ModeToggle />

        <Dialog>
          <DrawerTrigger asChild>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Open Drawer
            </button>
          </DrawerTrigger>
        </Dialog>

        {/* Drawer component */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>
                Here's a description of what this drawer contains.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4">
              <p>This is the main content inside the drawer.</p>
            </div>

            <DrawerFooter>
              <DrawerClose
                onClick={() => setIsOpen(false)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Close Drawer
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

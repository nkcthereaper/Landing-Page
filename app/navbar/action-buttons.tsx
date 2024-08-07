
"use client";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger aria-label="sidebar-toggler-button">
            <AlignJustify aria-label="bars icon that triggers the sidebar" className="mt-2" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col items-start space-y-4 text-lg text-black dark:text-white mt-10 w-full ">
            
                  <Link href="/">Pricing</Link>
                  <Link href="/">Contact</Link>
                  <Link href="/">About</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
   
    </div>
  );
};

export default ActionButtons;
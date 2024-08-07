"use client"
import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactUs() {
    const [isModel,setIsModel] = useState(true)
  return (
    <Dialog
    // modal={isModel}
    open={isModel}
    onOpenChange={()=> setIsModel(false)}
    >
    
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Contact Us
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
            //   defaultValue="Pedro Duarte"
              className="col-span-3"
              placeholder="User Name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="email"
            //   defaultValue=""
            type="email"
              className="col-span-3"
              placeholder="User Mail"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Phone Number
            </Label>
            <Input
              id="name"
            //   defaultValue="Pedro Duarte"
              className="col-span-3"
              placeholder=" Phone Number"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Message
            </Label>
            <Input
              id="name"
            //   defaultValue="Pedro Duarte"
              className="col-span-3"
              placeholder="Message"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
          <Button 
          onClick={()=> setIsModel(false)}
          className="mb-5 md:mb-0"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

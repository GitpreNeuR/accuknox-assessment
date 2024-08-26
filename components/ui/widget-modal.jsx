"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useModal } from "../hooks/useModal"
import { Textarea } from "@/components/ui/textarea"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,

} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDataStore } from "../hooks/useDataStore"
import { z } from "zod";



export function WidgetModal({ initialCategory }) {
  const modal = useModal();
  const categories = useDataStore(state => state.data.categories);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "");

  const addWidget = useDataStore((state) => state.addWidget);

  const widgetSchema = z.object({
    title: z.string().min(1, "Widget name is required"),
    content: z.string().min(1, "Widget content is required"),
    category: z.string().min(1, "Category is required"),
  });

  const handleAddWidget = () => {
    
    const selectedCategoryData = categories.find((category) => category.title === selectedCategory);

    if (!selectedCategoryData) {
      console.error("Selected category not found");
      return;
    }

    const categoryId = selectedCategoryData.id;

    const result = widgetSchema.safeParse({
      title,
      content,
      category: selectedCategory, 
    });

    if (!result.success) {
      console.error(result.error);
      return;
    }

    
    const widget = {
      id: `widget-${Date.now()}`, 
      title: result.data.title,
      content: result.data.content,
      type: "text", 
    };

    // Add the widget to the selected category
    addWidget(categoryId, widget);
    // Reset form fields and selected category
    setTitle("");
    setContent("");
    setSelectedCategory(initialCategory || "");
    modal.onClose();
  };




  return (
    <Sheet open={modal.isOpen} className="" onOpenChange={modal.onClose}>

      <SheetContent className="min-w-[450px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="">
            <div className="">Add Widgets</div></SheetTitle>
          <SheetDescription>
            Personalize your dashboard by adding the widget you want.
          </SheetDescription>
        </SheetHeader>

        <form action={handleAddWidget} className="flex flex-col mt-8 max-w-sm w-fill items-start gap-y-4">

          <div className="flex flex-col w-full gap-y-2">
            <Label htmlFor="widget">Widget Title</Label>
            <Input type="text" id="widget" placeholder="Widget name" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <Label htmlFor="widget-content">Widget Content</Label>
            <Textarea id="widget-content" placeholder="Widget Content" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <Label>Choose Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((category, index) => (
                    <SelectItem value={category.title} key={index}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-x-4">
            <Button type="submit" variant="defaultOne">Confirm</Button>
            <SheetClose>
              <Button type="submit" variant="default">Cancel</Button>
            </SheetClose>
          </div>

        </form>




      </SheetContent>
    </Sheet>
  )
}

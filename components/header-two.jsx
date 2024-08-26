"use client";
import React,{useState} from "react";
import { RefreshCcw, Clock, EllipsisVertical, Plus,Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useModal } from "./hooks/useModal";
import {WidgetModal} from "./ui/widget-modal";

function HeaderTwo({onRefresh}) {
  const modal=useModal();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);  
  };


  const handleRefresh = () => {
    onRefresh(true); 
    setTimeout(() => {
      onRefresh(false); 
    }, 1000);
  };
  return (
    <>
    <div className="flex flex-col md:flex-row mt-12 items-center justify-between sm:mt-20 xs:mt-5 sm:px-6 xs:px-[20px] gap-y-2">
  <h1 className="font-semibold">CNAPP Dashboard</h1>

  <section className="flex items-center gap-x-2 mt-4 md:mt-0">
    <Button onClick={modal.onOpen} variant="default" className="flex gap-x-2 items-center">
      <span>Add Widget</span>
      <Plus className="h-4 w-4 text-gray-900" />
    </Button>

    <Button onClick={handleRefresh}>
      <RefreshCcw className="h-4 w-4 text-gray-900" />
    </Button>

    <Button>
      <EllipsisVertical className="h-4 w-4 text-gray-900" />
    </Button>

    <div>
    <Select>
      <SelectTrigger className="w-[180px]">
        <Clock className="h-4 w-4"/>
        <SelectValue placeholder="Select time" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Last 2 days">Last 2 days</SelectItem>
          <SelectItem value="Last week">Last week</SelectItem>
          <SelectItem value="Last Month">Last Month</SelectItem>
          <SelectItem value="Last Year">Last Year</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  </section>
      <div className="relative md:hidden min-w-full sm:block mt-4" >
          <Search className="h-5 w-5 left-2 top-2.5  text-gray-500 cursor-pointer absolute"/>
          <Input placeholder="Search" value={searchTerm} 
            onChange={handleSearchChange}  className="pl-9 w-full" />
        </div>
  <WidgetModal/>
</div>

    </>
  );
}

export default HeaderTwo;

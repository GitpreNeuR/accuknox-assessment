import React from 'react'
import { Card, CardHeader,  CardContent } from "@/components/ui/card";
import { Plus } from 'lucide-react';
import { useModal } from '../hooks/useModal';
import { Button } from './button';


function AddWidgetCard() {
  const modal=useModal();
  return (
    <>
    <Card className="relative shadow-xl w-full h-full ">
      
      <CardHeader>
      </CardHeader>
      <CardContent>
      <div className="w-full grid place-items-center  h-52 ">
      <Button onClick={modal.onOpen} variant="default" className="flex gap-x-2 items-center">
      <span>Add Widget</span>
      <Plus className="h-4 w-4 text-gray-900" />
     </Button>
     </div>
      </CardContent>
    </Card>
    </>
  )
}

export default AddWidgetCard
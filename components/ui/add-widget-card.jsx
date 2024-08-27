import React from 'react';
import { Card, CardContent} from "@/components/ui/card";
import { Plus } from 'lucide-react';
import { useModal } from '../hooks/useModal';
import { Button } from './button';

function AddWidgetCard() {
  const modal = useModal();

  return (
    <Card className="relative shadow-xl overflow-hidden  w-full min-h-[19rem] h-full ">
    
      <CardContent className="flex items-center justify-center h-full rounded-md ">
        <Button onClick={modal.onOpen} variant="default" className="flex gap-x-2 items-center">
          <span>Add Widget</span>
          <Plus className="h-4 w-4 text-gray-900" />
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddWidgetCard;

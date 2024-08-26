import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis } from "recharts";
import { X, ChartNoAxesCombined } from 'lucide-react';
import { useDataStore } from '../hooks/useDataStore';

function Widget({ widget, categoryId }) {
  const removeWidget = useDataStore((state) => state.removeWidget);

  const handleRemove = () => {
    removeWidget(categoryId, widget.id);
  };

  const renderWidget = () => {
    switch (widget.type) {
      case 'pie':
        return (
          <div className="flex flex-col md:flex-row items-center md:gap-4 gap-3 w-full h-full">
            <div className="flex-grow md:w-2/3 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    dataKey="count"
                    data={widget?.graph?.categories}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    isAnimationActive={false}
                  >
                    {widget?.graph?.categories.map((chart, index) => (
                      <Cell key={`cell-${index}`} fill={chart.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className='mt-4 mx-auto md:mt-0 grid grid-cols-2 md:grid-cols-1 md: gap-2 w-full md:w-1/2'>
              {widget?.graph?.categories.map((chart, index) => (
                <li key={index} className="flex items-center gap-x-2">
                  <span className="h-4 w-4 border border-slate-950 rounded-sm" style={{ backgroundColor: chart.color }} />
                  <span className="text-xs">{`${chart.status} (${chart.count})`}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'bar':
        return (
          <div className="flex flex-col  items-center md:gap-4 gap-6 w-full h-full">
            <div className="flex-grow md:w-full h-52 flex flex-col items-center justify-evenly">
              <span className="text-xs font-semibold">{widget.graph.total} <span className=" font-normal">Total vulnerabilities</span></span>
              <div className="w-full  h-full mt-2">
                <ResponsiveContainer width="100%" height="100%" >
                <BarChart data={widget.graph.categories}>
              <XAxis dataKey="name" />
              <YAxis />
              
              <Bar dataKey="count">
                {widget.graph.categories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} className='hover:bg-transparent' />
                ))}
              </Bar>
            </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-4 max-w-md mx-auto">
  {widget?.graph?.categories.map((chart, index) => (
    <li key={index} className="flex items-center gap-x-2">
      <span
        className="h-4 w-4 border border-slate-950 rounded-sm"
        style={{ backgroundColor: chart.color }}
      />
      <span className="text-xs">{`${chart.status} (${chart.count})`}</span>
    </li>
  ))}
</ul>

          </div>
        );
        case 'nothing':
          return (
            <div className="flex flex-col items-center justify-center w-full h-52 bg-gray-200 rounded-md ">
              <ChartNoAxesCombined className="h-10 w-10 text-slate-500" />
              <p className="text-muted-foreground text-sm text-slate-500">{widget.graph.data}</p>
            </div>
          );
        case 'text':
          return (
            <div className="flex px-4 py-3 w-full h-52 overflow-y-auto bg-gray-200 rounded-md ">
              <p className="text-xs">{widget.content}</p>
            </div>
          );
      default:
        return null;
    }
  };

  return (
    <Card className="relative shadow-xl w-full h-full">
      <button onClick={handleRemove} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
        <X className="h-5 w-5" />
      </button>
      <CardHeader>
        <CardTitle className="text-sm">{widget.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {renderWidget()}
      </CardContent>
    </Card>
  );
}

export default Widget;

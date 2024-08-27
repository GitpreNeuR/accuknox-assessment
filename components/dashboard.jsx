"use client";
import React, { useState, useMemo } from "react";
import Widget from "./ui/widget";
import HeaderTwo from "./header-two";
import { SyncLoader } from "react-spinners";
import { useDataStore } from "./hooks/useDataStore";
import { WidgetModal } from "./ui/widget-modal";
import AddWidgetCard from "./ui/add-widget-card";

function Dashboard({ searchQuery }) {
  const categories = useDataStore((state) => state.data.categories);
  const [refresh, setRefresh] = useState(false);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;
    return categories
      .map((category) => ({
        ...category,
        widgets: category.widgets.filter((widget) =>
          widget.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((category) => category.widgets.length > 0);
  }, [categories, searchQuery]);

  // Memoize the categories mapping to avoid unnecessary re-renders
  const renderedCategories = useMemo(() => {
    return filteredCategories.map((category) => (
      <div key={category.id} className="mb-8 ">
      <h3 className="text-sm font-semibold mb-4">{category.title}</h3>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6 w-full ">
        {category.widgets.map((widget) => (
          <div className="w-full" key={widget.id}>
          <Widget widget={widget}  categoryId={category.id} />
          </div>
        ))}
        {!searchQuery && <AddWidgetCard/>}
      </div>
      
      
      
    </div>
    ));
  }, [filteredCategories, searchQuery]);

  return (
    <>
      <HeaderTwo onRefresh={setRefresh} />
      <main className="w-full h-full">
        <section className="flex items-center min-w-full p-4">
          {refresh ? (
            <div className="flex items-center justify-center w-full h-full">
              <SyncLoader color="#4B5563" /> {/* Adjust color if needed */}
            </div>
          ) : (
            <div className="mb-8 sm:mx-auto md:mx-0 mx-auto">
              {renderedCategories}
            </div>
          )}
        </section>
        <WidgetModal />
      </main>
    </>
  );
}

export default Dashboard;

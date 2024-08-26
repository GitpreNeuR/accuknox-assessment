import { create } from 'zustand';
import { data } from '../data/data';
import toast from 'react-hot-toast';

export const useDataStore = create((set) => ({
  data: data, 

  setData: (newData) => set({ data: newData }),

  
  addWidget: (categoryId, widget) => {
    try {
      set((state) => {
        const category = state.data.categories.find(c => c.id === categoryId);
        if (category) {
          category.widgets.push(widget);
        } else {
          throw new Error('Category not found');
        }
        return { data: { ...state.data, categories: [...state.data.categories] } };
      });
      toast.success('Widget added');
    } catch (error) {
      console.log('Add widget error:', error);
    }
  },

  
  removeWidget: (categoryId, widgetId) => {
    try {
      set((state) => {
        const category = state.data.categories.find(c => c.id === categoryId);
        if (category) {
          category.widgets = category.widgets.filter(w => w.id !== widgetId);
        } else {
          throw new Error('Category not found');
        }
        return { data: { ...state.data, categories: [...state.data.categories] } };
      });
      toast.success('Widget removed')
    } catch (error) {
      console.log('Removve widget',error);

    }
  },
}));

import { useState } from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One ponch', 'Dragon Ball'])

  const onAddCategory = (newCategory) => {
    if(categories.some(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
    setCategories( prev => ([ newCategory, ...prev ]) )
  }

  return (
    <>      
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />     

      {
        categories.map((category, i) => 
          <GifGrid key={category+i} category={category} />
        )
      }
    </>
  )
}
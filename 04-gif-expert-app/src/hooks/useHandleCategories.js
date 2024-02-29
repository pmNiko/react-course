import { useState } from 'react';

export const useHandleCategories = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if(categories.some(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
    setCategories( prev => ([ newCategory, ...prev ]) )
  }

  const onRemoveCategory = (categoryRemove) => {
    const categoriesDraft = categories.filter(cat => cat !== categoryRemove);
    console.log(categoriesDraft);
    setCategories([...categoriesDraft]);
  }

  return{
    onAddCategory,
    onRemoveCategory,
    categories
  }
}
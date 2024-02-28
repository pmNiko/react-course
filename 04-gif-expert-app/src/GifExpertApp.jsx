import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import {useHandleCategories} from './hooks'

export const GifExpertApp = () => {
  const {categories, onAddCategory, onRemoveCategory} = useHandleCategories();

  return (
    <>      
      <h1>GifExpertApp</h1>

      <AddCategory 
        onAddCategory={onAddCategory} 
      />     

      {
        categories.map((category, i) => 
          <GifGrid 
            key={category+i} 
            category={category} 
            onRemoveCategory={() => onRemoveCategory(category)} 
          />
        )
      }
    </>
  )
}
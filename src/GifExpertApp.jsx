import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

  
export const GifExpertApp = () => {

  const [categories, setcategories] = useState([])

  const addNewCategory = (newCategory) =>{
    setcategories([newCategory,...categories])
  }


  return (
    <>
    
      <h1>GifExpertApp</h1>


      <AddCategory
        onNewCategory = {addNewCategory}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    
    
    </>
  )
}

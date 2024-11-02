import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";




export const useFetchGifs = (category) => {
 
      const [images, setimages] = useState([]);
      const [isLoading, setisLoading] = useState(true)

      const getImages = async () => {
          const newImages = await getGif(category);
          setimages(newImages);
          setisLoading(false)
      }

      //dispara la funcion una sola vez 
      useEffect( ()=>{
          getImages();
      }, [])



    return {
        images,
        isLoading
    }

}

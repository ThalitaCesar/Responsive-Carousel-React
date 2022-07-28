import { DivCarouselItem } from "./styles"

export const CarouselItem=({children, width})=> {

    return (
  <>
  <DivCarouselItem style={{width:width}}>
    {children}
  </DivCarouselItem>
  </>
      
    )
  }
  
  export default CarouselItem
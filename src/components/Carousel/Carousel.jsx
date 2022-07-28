import React, { useEffect, useState } from "react"
import { CarouselContainer, Indicadores, Inner, Next, Prev } from "./styles"
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useSwipeable } from "react-swipeable";

export const Carousel=({children})=> {


const [activeIndex, setActiveIndex] = useState(0);
const [paused, setPaused] =useState(false);

const updateIndex = (newIndex) =>{
    if(newIndex <0){
    newIndex = 0;
    }
    else if (newIndex>= React.Children.count(children)){
        newIndex = React.Children.count(children) -1;
    }
    setActiveIndex(newIndex)
};

// useEffect(()=>{
//     const interval = setInterval(()=>{
//         if(!paused){
//             updateIndex(activeIndex +1);
//         }
//     }, 6000);
//     return()=>{
//         if(interval){
//             clearInterval(interval)
//         }
//     }
// })

const handlers = useSwipeable({
    onSwipedLeft:()=>updateIndex(activeIndex+1),
    onSwipedRight:()=>updateIndex(activeIndex-1)
})
    return (
  <>
  <CarouselContainer
   {...handlers}
//   onMouseEnter={()=> setPaused(true)}
//   onMouseLeave={()=> setPaused(false)}
  >
  <Indicadores>
        <Prev onClick={()=>{
            updateIndex(activeIndex -1)
        }}>
            <AiOutlineDoubleLeft
              style={{ color: "#FF4C00", fontSize: "40px" }}
            />
        </Prev>
        <Inner style={{transform: `translateX(-${activeIndex*32}%`}}>
        {React.Children.map(children,(child, index)=>{
            return React.cloneElement(child, {width:"25%"})
        })}
        </Inner>
        
        <Next onClick={()=>{
            updateIndex(activeIndex +1)
        }}>
             <AiOutlineDoubleRight
                style={{ color: "#FF4C00", fontSize: "40px" }}
              />
        </Next>
    </Indicadores>
  </CarouselContainer>
  </>
      
    )
  }
  

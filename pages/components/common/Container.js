import { useEffect, useState } from "react";

const style = ()=>({
    title:(getWindowDimensions)=>({
  
      marginTop: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: `100%`,
      height: `${getWindowDimensions.height}px`,
  
      borderWidth: "10px",
      border: '3px solid #191922', 
      borderRadius:"5px"
    })
  })

export default function Container({Children}) {
const [dimension,setDimension] = useState({width:0,height:0})
  const classes = style(); 
 useEffect(()=>{
  let width,height;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  
  setDimension({width,height})
  console.log(width); // 0 if on the server, window width if on the client
  console.log(height);
 },[])
  
  return (
      <div style={classes.title(dimension)} >
             
              <p className="text-textC1 text-lg  ">SA(46%)</p>
            </div>

  )
}
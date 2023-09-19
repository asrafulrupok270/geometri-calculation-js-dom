let value = 0 ;

document.getElementById("triangle-btn").addEventListener("click",function(){
   value = value+1
   const count = value
 
    const triangleName = areaText("triangle-name").innerText
  
 const b= valueItem("b")
 const h= valueItem("h")
 const area = 0.5*b*h;
  const triangleArea = areaText("triangle-area") 
  triangleArea.innerText = area 
  const triangleAreaa = areaText("triangle-area").innerText 
  table(count,triangleName,triangleAreaa)
  setBg()
 


 
})
document.getElementById("rectengel-btn").addEventListener("click",function(){
    value = value+1
    const count = value

 const w= valueItem("w")
 const l= valueItem("l")
 const area = w*l
  const rectangleArea = areaText("rectangle-area") 
  rectangleArea.innerText = area
  const rectangleName = areaText("rectangle-name").innerText
  
  table(count,rectangleName,rectangleArea.innerText)
  setBg()

  

    
})
document.getElementById("parallelogram-btn").addEventListener("click",function(){
    value = value+1
    const count = value
    const parallelogramName = areaText("parallelogram-name").innerText
    const b= areaText("p-b").innerText
   
    const h= areaText("p-h").innerText
  const area = b*h;
  const parallelogramArea = areaText("parallelogram-area") 
  parallelogramArea.innerText = area
  table(count,parallelogramName,parallelogramArea.innerText)
  setBg()

  


})
document.getElementById("rhombus-btn").addEventListener("click",function(){
    value = value+1
    const count = value
    const rhombusName = areaText("rhombus-name").innerText
    const d1= areaText("d1").innerText
   
    const d2= areaText("d2").innerText
  const area = d1*d2 *.5;
  const rhombusArea = areaText("rhombus-area") 
  rhombusArea.innerText = area
  table(count,rhombusName,rhombusArea.innerText)
  setBg()

  


})
document.getElementById("pentagon-btn").addEventListener("click",function(){
    value = value+1
    const count = value
    const pentaName = areaText("penta-name").innerText
    const p= areaText("penta-p").innerText
   
    const b= areaText("penta-b").innerText
  const area = .5*p*b;

  const pentaArea = areaText("penta-area") 

  pentaArea.innerText = area

  table(count,pentaName,pentaArea.innerText)
  setBg()

  


})
document.getElementById("ellipse-btn").addEventListener("click",function(){
    value = value+1
    const count = value
    const ellipseName = areaText("ellipse-name").innerText
    const a= areaText("ellipse-a").innerText
   
    const b= areaText("ellipse-b").innerText
  const area = 3.1416*a*b;

  const ellipseArea = areaText("penta-area") 

  ellipseArea.innerText = area

  table(count,ellipseName,ellipseArea.innerText)
  
 
  setBg()


})
const setBg = () => {
     
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }

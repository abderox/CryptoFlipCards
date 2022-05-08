
import { useState } from 'react';

const Card = ({ card,handleChoice }) => {
  
 const [toggleStyle, setToggleStyle] = useState(false)
 const transition = "-translate-x-full transition duration-500 ease-out ";
 const handleClick = ()=>{
     setToggleStyle(!toggleStyle);
     handleChoice(card);
 }   

    return (
        <div  className="relative  blue-glassmorphism m-4  mf:ml-10 flex flex-1
       
        mf:max-w-[200px]
        mf:max-h-[200px]
        sm:max-w-[150px]
        sm:max-h-[150px]
        max-w-[100px]
        max-h-[100px]
        flex-col p-2 rounded-md  overflow-hidden" >

      <div className=" 
          flex flex-1
       front
      mf:max-w-[200px]
      mf:max-h-[200px]
      sm:max-w-[150px]
      sm:max-h-[150px]
      max-w-[100px]
      max-h-[100px]
      flex-col rounded-md  overflow-hidden" 
      >
        <div className="  flex flex-col items-center w-full m1-3 overflow-hidden">
          
          <img
            src={ card.src ? card.src :'https://copper2.wpengine.com/wp-content/uploads/2021/05/Ethernew-01.jpg'}
            alt="nature"
            className="w-full h-56 2xl:h-96 rounded-md shadow-lg object-cover "
          />
  
        </div>
      </div>
      <div className={`  absolute  flex flex-1 ${toggleStyle && transition}
       back
      mf:max-w-[200px]
      mf:max-h-[200px]
      sm:max-w-[150px]
      sm:max-h-[150px]
      max-w-[100px]
      max-h-[100px]
      flex-col  rounded-md  overflow-hidden`} 
    >
      <div className=" flip-card-inner flex flex-col items-center w-full m1-3 overflow-hidden">
        
        <img
          src={ 'https://copper2.wpengine.com/wp-content/uploads/2021/05/Ethernew-01.jpg'}
          onClick={handleClick}
          alt="nature"
          className="w-full h-56 2xl:h-96 rounded-md shadow-lg object-cover "
        />

      </div>
    </div>
    
    </div>
    );
  };

  export default Card;
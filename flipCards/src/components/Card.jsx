const Card = ({ src }) => {
  

    return (
      <div className="blue-glassmorphism m-4  mf:ml-10 flex flex-1
       
        mf:max-w-[200px]
        mf:max-h-[200px]
        sm:max-w-[150px]
        sm:max-h-[150px]
        max-w-[100px]
        max-h-[100px]
        flex-col p-2 rounded-md hover:shadow-2xl overflow-hidden" 
      >
        <div className="flex flex-col items-center w-full m1-3 overflow-hidden">
          
          <img
            src={ src ? src :'https://copper2.wpengine.com/wp-content/uploads/2021/05/Ethernew-01.jpg'}
            alt="nature"
            className="w-full h-56 2xl:h-96 rounded-md shadow-lg object-cover hover:scale-110  hover:[ transition duration-500 ease-in-out ]"
          />
  
        </div>
      </div>
    );
  };

  export default Card;
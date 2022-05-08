import React from 'react'

export default function GameContent() {
    return (
        <div className="gradient-bg-welcome flex flex-col p-5 justify-center items-center">
            <button className=" transfer-btn flex flex-row w-2/6 mf:w-1/6 justify-center items-center my-5 white-glassmorphism p-3 rounded-full cursor-pointer font-md text-white text-lg">
            <img src="https://img.icons8.com/flat-round/32/000000/play--v1.png"/><span className="ml-2">New Game</span> 
            </button>
            <div className="w-full mf:w-4/6 h-[4px] my-5 blue-glassmorphism  rounded-full"></div>

            <div className="p-5 w-full mf:w-4/6 flex flex-col justify-center items-center blue-glassmorphism  h-full shadow-2xl ">

                <br />
                <br />
                <br />

            </div>
        </div>
    )
}

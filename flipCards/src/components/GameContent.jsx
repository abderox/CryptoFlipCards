import React from 'react'


const imagesUrl = "../../images/";
const extension=".jpg";

const imagesSources = [
{"src": imagesUrl+"bitcoin"+extension},
{"src": imagesUrl+"crypto"+extension},
{"src": imagesUrl+"elon"+extension},
{"src": imagesUrl+"ether"+extension},
{"src": imagesUrl+"polygone"+extension},
{"src": imagesUrl+"shiba"+extension},
{"src": imagesUrl+"xrp"+extension},
{"src": imagesUrl+"tether"+extension},
];

const StartButton = ({ title }) => {
    return (

        <a href="javascript::;" class="relative inline-flex items-center w-2/6 mf:w-1/6  justify-center p-4 px-6 py-3 white-glassmorphism overflow-hidden font-medium  transition duration-300 ease-out border-2  rounded-full shadow-md group cursor-pointer text-white text-lg">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-700 group-hover:translate-x-0 ease">
                <img src="https://img.icons8.com/flat-round/28/000000/play--v1.png" />
            </span>
            <img src="https://img.icons8.com/flat-round/28/000000/play--v1.png" /> <span class="absolute flex items-center justify-center w-full h-full text-white text-lg transition-all duration-300 transform group-hover:translate-x-full ease ml-10 ">{title}</span>
            <span class="relative invisible   ">{title}</span>
        </a>
    );
};


const GameContent = () => {
    return (
        <div className="gradient-bg-welcome flex flex-col p-5 justify-center items-center">
            <div className="flex flex-1 justify-center items-center w-full 2xl:px-20 ">
                <div className="flex flex-col md:p-12 py-12 px-4 text-white font-semibold">
                    <h1 className=" text-[60px] text-center my-2 text-gradient transfer-btn-text">
                        Crypto Memory Cards
                    </h1>
                </div>
            </div>
            <StartButton title="New Game" />
            <div className="w-full mf:w-4/6 h-[4px] my-5 blue-glassmorphism  rounded-full"></div>

            <div className="p-5 w-full mf:w-4/6 flex flex-col justify-center items-center blue-glassmorphism  h-full shadow-2xl ">
                <br />
                <br />
                <br />
            </div>
        </div>
    )
};


export default GameContent;
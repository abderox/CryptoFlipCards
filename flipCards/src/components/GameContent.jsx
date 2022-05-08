import { useState } from 'react';
import { Card } from './export'
const imagesUrl = "../../images/";
const extension = ".jpg";

const imagesSources = [
    { "src": imagesUrl + "bitcoin" + extension },
    { "src": imagesUrl + "crypto" + extension },
    { "src": imagesUrl + "elon" + extension },
    { "src": imagesUrl + "ether" + extension },
    { "src": imagesUrl + "polygone" + extension },
    { "src": imagesUrl + "shiba" + extension },
    { "src": imagesUrl + "xrp.jpeg"  },
    { "src": imagesUrl + "tether" + extension },
];

const StartButton = ({ title, clickHandler }) => {
    return (

        <button onClick={() => clickHandler()} className="relative inline-flex items-center w-2/6 mf:w-1/6  justify-center p-4 px-6 py-3 white-glassmorphism overflow-hidden font-medium  transition duration-300 ease-out border-2  rounded-full shadow-md group cursor-pointer text-white " >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-700 group-hover:translate-x-0 ease">
                <img src="https://img.icons8.com/flat-round/28/000000/play--v1.png" />
            </span>
            <img src="https://img.icons8.com/flat-round/28/000000/play--v1.png" /> <span className="absolute flex items-center justify-center w-full h-full text-white mf:text-lg transition-all duration-300 transform group-hover:translate-x-full ease ml-10 text-sm">{title}</span>
            <span className="relative invisible   ">{title}</span>
        </button>
    );
};



const GameContent = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);

    const shuffleCards = () => {
        const shuffleCards = [...imagesSources, ...imagesSources]
            .sort(() => (Math.random() - 0.5))
            .map((image) => ({ ...image, id: Math.random() }));
        setCards(shuffleCards);
        setTurns(0)
        console.log(cards, turns)

    }
    return (
        <div className="gradient-bg-welcome flex flex-col p-5 justify-center items-center">
            <div className="flex flex-1 justify-center items-center w-full 2xl:px-20 ">
                <div className="flex flex-col md:p-12 py-12 px-4 text-white font-semibold">
                    <h1 className=" text-[60px] text-center my-2 text-gradient transfer-btn-text">
                        Crypto Memory Cards
                    </h1>
                </div>
            </div>

            <StartButton title="New Game" clickHandler={shuffleCards} />
            <div className="w-full mf:w-4/6 h-[4px] my-5 blue-glassmorphism  rounded-full"></div>

            <div className="p-5 w-full mf:w-4/6  justify-center items-center blue-glassmorphism grid grid-cols-4 gap-y-2 mf:-gap-x-30  shadow-2xl ">

                {cards.map((card, i) => (

                    <Card key={i} src={card.src} />

                ))}

            </div>
        </div>
    )
};


export default GameContent;
import { useState, useEffect } from 'react';
import { Card } from './export'
import logo from "../../images/koar.png";
const imagesUrl = "../../images/";
const extension = ".jpg";

const imagesSources = [
    { "src": imagesUrl + "bitcoin" + extension, matched: true },
    { "src": imagesUrl + "crypto" + extension, matched: true },
    { "src": imagesUrl + "elon" + extension, matched: true },
    { "src": imagesUrl + "ether" + extension, matched: true },
    { "src": imagesUrl + "polygone" + extension, matched: true },
    { "src": imagesUrl + "shiba" + extension, matched: true },
    { "src": imagesUrl + "xrp.jpeg", matched: true },
    { "src": imagesUrl + "tether" + extension, matched: true },
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
    const [fails, setfails] = useState(0);
    const [Choice, setChoice] = useState(null);
    const [ChoiceTwo, setChoiceTwo] = useState(null);
    const [retries, setretries] = useState(0);
    

    const shuffleCards = () => {
        const shuffleCards = [...imagesSources, ...imagesSources]
            .sort(() => (Math.random() - 0.5))
            .map((image) => ({ ...image, id: Math.random() }));
        setCards(shuffleCards);
        setretries(prev => prev +1)
        setTurns(0)
        setfails(0)
        console.log(cards, turns)
        const timer = setTimeout(() => {
            flipAll();
          }, 3000);

    }

    const handleChoice = (card) => {
        Choice ? setChoiceTwo(card) : setChoice(card);

    }
    const flipAll=()=>{
        setCards((prev) => {
             return prev.map(card => {
                
                return {...card,matched:false}
               
            });
        })
    }

 
    useEffect(() => {

        
        if (Choice && ChoiceTwo) {
            if (Choice.src === ChoiceTwo.src) {
                setCards(prev => {
                    return prev.map(card => {
                        if (card.src === Choice.src) {
                            return { ...card, matched: true }
                        }
                        else {
                            return card
                        }
                    });
                })
                console.log("horary");
                resetTurn();
            }
            else {
                resetTurn();
                resetFail();
            }
        }

       

    }, [Choice, ChoiceTwo])


    const resetFail = () => {
        setChoice(null);
        setChoiceTwo(null);
        setfails(prev => prev + 1);
    }

    const resetTurn = () => {
        setChoice(null);
        setChoiceTwo(null);
        setTurns(prev => prev + 1);
    }
    return (
        <div className="gradient-bg-welcome flex flex-col p-5 justify-center items-center">

            <div className="flex flex-1 justify-center items-center w-full 2xl:px-20 ">
                <div className="flex mf:flex-row sm:flex-col md:p-12 py-12 px-4 text-white font-semibold">
                    <a href="https://www.canva.com/design/DAFAF9jBTB0/HVpTmOix4rxpNPBhYV-WAw/view?utm_content=DAFAF9jBTB0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" className="flex items-center">
                        <img
                            src={logo}
                            alt="logo"
                            className=" mf:h-48 sm:24  cursor-pointer mr-4 "
                        />
                    </a>
                    <h1 className=" text-[60px] text-center my-2 text-gradient transfer-btn-text">
                        Crypto Memory Cards
                    </h1>
                </div>
            </div>


            <StartButton title={cards.length > 0 ? "Restart" : "New game"} clickHandler={shuffleCards} />
            <div className="w-full mf:w-4/6 my-5 blue-glassmorphism justify-center items-center rounded-full">

                <div className="flex flex-col  ">
                    <a href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden text-indigo-600 rounded-lg shadow-2xl group">
                        <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-pink-500 rounded-full blur-md ease"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-800 rounded-full blur-md"></span>
                            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-violet-800 rounded-full blur-md"></span>
                        </span>
                        <span class="relative text-white text-lg font-semibold ml-10">Attempts {retries}</span>
                        <span class={`relative text-white text-lg font-semibold ml-10  ${turns - fails > 0 && "text-green-500"}`}>Scores {turns - fails > 0 ? turns - fails : 0}</span>
                        <span class="relative text-white text-lg font-semibold ml-10">Turns {turns}</span>
                        <span class={`relative text-white text-lg font-semibold ml-10 ${fails > 0 && "text-pink-500"}`}>Fails {fails}</span>
                    </a>
                </div>
            </div>

            <div className="p-5 w-full mf:w-4/6  justify-center items-center blue-glassmorphism grid grid-cols-4 gap-y-2 mf:-gap-x-30  shadow-2xl ">

                {cards.map((card, i) => (

                    <Card key={card.id} card={card} handleChoice={handleChoice} flipped={card === ChoiceTwo || card === Choice || card.matched} matched={card === ChoiceTwo || card === Choice && !card.matched} />

                ))}

            </div>

        </div>
    )
};


export default GameContent;
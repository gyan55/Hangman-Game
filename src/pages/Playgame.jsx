import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState, useEffect } from "react";
import HangMan from "../components/HangMan/HangMan";


function PlayGame() {
    const [usedLetters, setUsedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [allLettersGuessed, setAllLettersGuessed] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const location = useLocation(); 
    const wordSelected = location.state?.wordSelected; // If the state is not defined, it will return undefined, otherwise it will return the value of wordSelected

    const handleLetterClick = function(letter) {
        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Incorrect');
            setStep(step + 1);
        }
        setUsedLetters([...usedLetters, letter]);
    }

    useEffect(() => {
        const checkAllLettersGuessed = () => {
            const uniqueLetters = new Set(wordSelected.toUpperCase());
            const guessedLetters = new Set(usedLetters);
            const allGuessed = [...uniqueLetters].every(letter => guessedLetters.has(letter));
            if (allGuessed) {
                setAllLettersGuessed(true);
                setShowPopup(true);
            }
        };

        checkAllLettersGuessed();
    }, [usedLetters, wordSelected]);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 text-white p-4 shadow-md w-full">
            <h1 className="text-center text-4xl font-extrabold tracking-widest uppercase">Guess if u can</h1>
        </nav>
            <div className="flex flex-col items-center justify-center flex-1 p-4">
                <h1 className="text-4xl font-bold mb-4">Play Game</h1>
                
                <MaskedText text={wordSelected} usedLetters={usedLetters} />
                <hr className="my-4 w-full"/>

                <div className="flex justify-between items-center w-full">
                    <div className="basis-2/4">
                        <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                    </div>
                    
                    <div className="basis-2/4 flex justify-center items-center">
                        <HangMan step={step}/>
                    </div>
                </div>

               

                <hr className="my-4 w-full"/>

                <Link to='/' className="text-blue-600 underline hover:text-blue-700">Start Game</Link>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg relative">
                        <button
                            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
                            onClick={handleClosePopup}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                        <p>You have guessed all the letters correctly!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlayGame;
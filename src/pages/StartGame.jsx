import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {

    const navigate = useNavigate();

    function handleSubmit(value) {
        navigate('/play', { state: {wordSelected: value}});
    }

    return (
        <div>
             
             <nav className="bg-purple-800 text-white p-4 shadow-md">
                <h1 className="text-center text-4xl font-extrabold tracking-widest uppercase">Guess if u can</h1>
            </nav>

            <div className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-2xl font-bold mt-4">Start Game</h1>
                <TextInputFormContainer onSubmit={handleSubmit} />
            </div>
            
        </div>
    );
}
export default StartGame;
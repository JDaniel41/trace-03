import { useState } from "react";
import BoxGrid from "./BoxGrid";

function GameScreen() {
    let [showBoard, setShowBoard] = useState(false);

    function showGameBoard() {
        let initialStates = Array(9).fill(false);
        let boxesAreClickable = Array(9).fill(true);

        return (
            <BoxGrid
                boxesAreClickable={boxesAreClickable}
                initialStates={initialStates}
            />
        );
    }

    function switchToGameBoard() {
        setShowBoard(true);
    }

    function showStartScreen() {
        return (
            <div>
                <div>Welcome to my Memory Game!</div>
                <button onClick={switchToGameBoard}>Click</button>
            </div>
        );
    }

    return (
        <div className="flex">
            {showBoard ? showGameBoard() : showStartScreen()}
        </div>
    );
}

export default GameScreen;

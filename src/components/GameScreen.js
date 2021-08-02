import { useState } from "react";
import BoxGrid from "./BoxGrid";

function GameScreen() {
    let [showBoard, setShowBoard] = useState(false);
    let [playingPattern, setPlayingPattern] = useState(false);
    let [currentPatternIdx, setCurrentPatternIdx] = useState(0);
    let [currentPattern, setCurrentPattern] = useState([1, 2, 3, 4, 5, 6]);
    let [currentBoardState, setCurrentBoardState] = useState(
        getGridStatesForSpace(currentPattern[0])
    );

    function getGridStatesForSpace(currentSpace) {
        let states = Array(9)
            .fill(0)
            .map((a, currentIdx) => {
                return currentIdx === currentSpace ? true : false;
            });
        return states;
    }

    function executeNextButtonClick() {
        let boxesAreClickable = Array(9).fill(false);
        setCurrentBoardState(
            getGridStatesForSpace(currentPattern[currentPatternIdx])
        );
        console.log(currentBoardState);

        setCurrentPatternIdx(currentPatternIdx + 1);
    }

    function showGameBoard() {
        let boxesAreClickable = Array(9).fill(false);

        return (
            <div>
                <BoxGrid
                    boxesAreClickable={boxesAreClickable}
                    initialStates={currentBoardState}
                />
                <button onClick={executeNextButtonClick}>See Next One!</button>
            </div>
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

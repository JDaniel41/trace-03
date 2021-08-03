import { useState, useEffect } from "react";
import BoxGrid from "./BoxGrid";
import StartScreen from "./StartScreen";

function GameScreen() {
    let [showBoard, setShowBoard] = useState(false);
    let [playingPattern, setPlayingPattern] = useState(true);
    let [currentPatternIdx, setCurrentPatternIdx] = useState(0);
    let [currentPattern, setCurrentPattern] = useState(generatePattern(3));
    let [currentBoardState, setCurrentBoardState] = useState(
        Array(9).fill(false)
    );
    let [clickableBoxes, setClickableBoxes] = useState(Array(9).fill(false));

    function handleBoxOnClick(boxNum) {
        if (boxNum === currentPattern[currentPatternIdx]) {
            // IT MATCHES!
            setCurrentPatternIdx(currentPatternIdx + 1);
            if (currentPatternIdx === currentPattern.length - 1) {
                console.log("DONE!");
            }
        } else {
            // Need to show End Game Screen
            setShowBoard(false);
        }
    }

    function generatePattern(patternLength) {
        let pattern = [];

        while (pattern.length < patternLength) {
            pattern.push(Math.floor(Math.random() * 9));
        }

        return pattern;
    }

    function getGridStatesForSpace(currentSpace) {
        let states = Array(9)
            .fill(0)
            .map((a, currentIdx) => {
                return currentIdx === currentSpace ? true : false;
            });
        return states;
    }

    function executeNextButtonClick() {
        if (playingPattern) {
            setCurrentBoardState(
                getGridStatesForSpace(currentPattern[currentPatternIdx])
            );
            console.log(currentBoardState);
            setCurrentPatternIdx(currentPatternIdx + 1);

            if (currentPatternIdx === currentPattern.length - 1) {
                setCurrentPatternIdx(0);
                setPlayingPattern(false);
                console.log("First False");
                setClickableBoxes(Array(9).fill(true));
            }
        } else {
            console.log("False");
        }
    }

    function showGameBoard() {
        return (
            <div>
                <h1>
                    {playingPattern
                        ? "Click to see next step!"
                        : "Guess the Pattern!"}
                </h1>
                <BoxGrid
                    boxesAreClickable={clickableBoxes}
                    initialStates={currentBoardState}
                    handleBoxOnClick={handleBoxOnClick}
                />
                {playingPattern ? (
                    <button onClick={executeNextButtonClick}>
                        See Next One!
                    </button>
                ) : null}
            </div>
        );
    }

    function switchToGameBoard() {
        setShowBoard(true);
    }

    function showStartScreen() {
        return <StartScreen onButtonClick={switchToGameBoard} />;
    }

    return (
        <div className="flex">
            {showBoard ? showGameBoard() : showStartScreen()}
        </div>
    );
}

export default GameScreen;

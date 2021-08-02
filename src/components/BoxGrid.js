import { useState } from "react";
import BlinkBox from "./BlinkBox";

function BoxGrid({ boxesAreClickable, initialStates, patternCallback }) {
    function renderBlinkBox(initialState, index) {
        return (
            <BlinkBox
                canBeClicked={boxesAreClickable[index]}
                initialState={initialState}
            />
        );
    }

    return (
        <div className="grid grid-cols-3 justify-between gap-1 h-96 w-96">
            {initialStates.map(renderBlinkBox)}
        </div>
    );
}

export default BoxGrid;

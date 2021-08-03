import { useEffect } from "react/cjs/react.production.min";
import BlinkBox from "./BlinkBox";

function BoxGrid({ boxesAreClickable, initialStates, handleBoxOnClick }) {
    function renderBlinkBox(initialState, index) {
        return (
            <BlinkBox
                key={index}
                boxId={index}
                canBeClicked={boxesAreClickable[index]}
                initialState={initialState}
                handleBoxOnClick={handleBoxOnClick}
            />
        );
    }

    return (
        <ul className="grid grid-cols-3 justify-between gap-1 h-96 w-96">
            {initialStates.map(renderBlinkBox)}
        </ul>
    );
}

export default BoxGrid;

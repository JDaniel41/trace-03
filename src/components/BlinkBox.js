import { useEffect, useState } from "react";

function BlinkBox({ canBeClicked, initialState, boxId, handleBoxOnClick }) {
    const [lightOn, setLightState] = useState(initialState);

    let bgColor = lightOn ? "bg-white" : "bg-red-600";

    function updateColor() {
        if (canBeClicked) {
            handleBoxOnClick(boxId);
            setLightState(!lightOn);
        }
    }

    useEffect(() => {
        setLightState(initialState);
    }, [initialState]);

    return (
        <li
            className={
                bgColor + " border-4 border-black border-opacity-100 rounded-md"
            }
            onClick={updateColor}
        >
            &nbsp;
        </li>
    );
}

export default BlinkBox;

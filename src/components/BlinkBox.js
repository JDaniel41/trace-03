import { useEffect, useState } from "react";

function BlinkBox({ canBeClicked, initialState }) {
    const [lightOn, setLightState] = useState(initialState);

    let bgColor = lightOn ? "bg-white" : "bg-red-600";

    function updateColor() {
        if (canBeClicked) {
            setLightState(!lightOn);
        }
    }

    useEffect(() => {
        bgColor = lightOn ? "bg-white" : "bg-red-600";
    });

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

import BoxGrid from "./BoxGrid";

function GameScreen() {
    let initialStates = Array(9).fill(false);
    let boxesAreClickable = Array(9).fill(true);

    return (
        <BoxGrid
            boxesAreClickable={boxesAreClickable}
            initialStates={initialStates}
        />
    );
}

export default GameScreen;

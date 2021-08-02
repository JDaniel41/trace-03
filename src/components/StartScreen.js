function StartScreen({ onButtonClick }) {
    return (
        <div>
            <div>Welcome to my Memory Game!</div>
            <button onClick={onButtonClick}>Click</button>
        </div>
    );
}

export default StartScreen;

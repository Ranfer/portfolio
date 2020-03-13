// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// function component
const App = () => {
    const buttonText = {text: 'Click Me!'};
    const labelText = 'Enter Name: ';
    const style = { backgroundColor: 'blue', color: 'white' };

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={style}>{buttonText.text}</button>
        </div>
    );
};

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
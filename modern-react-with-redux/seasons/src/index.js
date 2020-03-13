import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log('Error ', err) 
//     );
//     return <div>Hi There!</div>;
// }


class App extends React.Component {

    // constructor(props) {
    //     super(props); // always required

    //     // // this is the only time we do direct assigment to this.state 
    //     // this.state = { lat: null, errorMessage: '' };
    // }

    // second way to initialize state, no constructor required
    state = { lat: null, errorMessage: '' };

    getCurrentPosition() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });

                // we did not
                // this.state = any;
            },
            (err) => {
                this.setState({ errorMessage: err.message });
                console.log('Error ', err)
            }
        );
    }

    componentDidMount() {
        this.getCurrentPosition();
    }

    // componentDidUpdate() {
    //     console.log('My component was just updated');
    // }

    // helper method
    renderContent() {
        // conditional rendering 
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept location request" />
    }

    // requirement of react!!!
    // render gets call frecuntly
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
import React, { Component } from 'react';
import Board from './Board/board';
// import Table from './table';

class App extends Component {
    state = {
        characters: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    render() {
        return (
            <div className="App">
                <Board />
            </div>
        );
    }
}

export default App;

// <Table
//                     characterData={this.state.characters}
//                     removeCharacter={this.removeCharacter}
//                 />
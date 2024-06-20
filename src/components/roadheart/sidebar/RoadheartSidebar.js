import React from 'react';
import CharacterProfile from './CharacterProfile.js'
import { Link } from 'react-router-dom';

class RoadheartSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { party: [], inventory: [] };
    }

    componentDidMount = async() => {
        fetch(process.env.PUBLIC_URL + '/party.json')
            .then (res=>res.json())
            .then(data => this.setState({ party: data.characters, inventory: data.inventory}))
            .catch(err=> console.log(err));
    }

    render() {
        console.log(this.state.party)
        return (
            <div className="roadheart-crafting-section">
                <h1>Party Inventory</h1>
                <ul className="materials-list">
                    {this.state.inventory.map((material, index) => 
                    <li key={index}><b>{material}</b></li>)}
                </ul>
                <Link to="/CS601TermProject/projects/roadheart-repository/rules" className="roadheart-link"><img src="/assets/quill.svg" /><h2>Crafting Rules</h2></Link>
                <ul className="character-profiles">
                    {this.state.party.map((char, index) =>
                        <li key={index}><CharacterProfile character={char}/></li>)}
                </ul>
            </div>
        );
    }
}

export default RoadheartSidebar;
import { Link } from 'react-router-dom';

function RoadheartNav() {
    return(
        <div className="roadheart-nav">
            <Link to="/projects/roadheart-repository/rules" className="roadheart-link"><img src="/assets/quill.svg" /><h2>Crafting Rules</h2></Link>
            <Link to="/projects/roadheart-repository/store" className="roadheart-link"><img src="/assets/potion.svg" /><h2>Craftable Items</h2></Link>
        </div>
    );
}

export default RoadheartNav;
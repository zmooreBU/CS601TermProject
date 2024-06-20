import React from 'react';
import CraftingItem from './CraftingItem.js'
import ItemDetail from './ItemDetail.js';
import { Routes, Route, Outlet } from 'react-router-dom';

class CraftingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inventory: [] };
    }

    componentDidMount = async () => {
        fetch(process.env.PUBLIC_URL + '/inventory.json')
            .then (res => res.json())
            .then (data => this.setState({ inventory: data}))
            .catch(err => console.log(err))
    }

    render () {
        return (
            <div>
            <Routes>
                <Route index element={
                    <div className="roadheart-crafting-section">
                        <h1 className="crafting-title">Craftable Items</h1>
                        <ul className="crafting-list">
                            {this.state.inventory.map((item, index) => 
                                <li key={index}><CraftingItem item={item} /></li>)}
                        </ul>
                    </div>
                } />
                <Route path="/:itemSKU" element = {<ItemDetail inventory={this.state.inventory} /> } />
            </Routes>
            <Outlet />
            </div>
        )
    }
}

export default CraftingList;
import { useParams, Link } from 'react-router-dom';

function ItemDetail ({inventory}) {
    let { itemSKU } = useParams();
    const defaultItem= {
        "sku": 0,
        "name": "",
        "imgURL": "",
        "level": 0,
        "type": "",
        "traits": [],
        "activate": {"actions":0},
        "desc": "",
        "qty": 0,
        "materials": []
                        };
    const item = inventory[inventory.findIndex(item => item.sku === Number(itemSKU))] || defaultItem;
    
    let actionSVG = '';
    switch (item.activate.actions) {
        case 0:
            actionSVG = "/CS601TermProject/assets/free-action.svg";
            break;
        case 1:
            actionSVG = "/CS601TermProject/assets/single-action.svg";
            break;
    }

    return(
        <div className="roadheart-crafting-section">
            <div className="item-detail-back-button">
            <Link to="/projects/roadheart-repository/store" className="roadheart-link"><img src="/assets/potion.svg" /><h3>Back to Craftable Items</h3></Link>
            </div>
            <div className="item-detail">
                <img src={'/CS601TermProject/' + item.imgURL} />
                <div className="item-info">
                    <div className="item-title"> <h2>{item.name}</h2> <h2> {item.type} {item.level}</h2></div>
                        <div className="item-divider"></div>
                        <div className="item-description">
                            <p>Item SKU: { itemSKU }</p>
                            <b>Traits</b>
                            <ul className="traits-list">
                                { item.traits.map((trait, index) => <li key={index}>{trait}</li>)}
                            </ul>
                            <p className="activate-icon"><b>Activate:</b> <img src={actionSVG} alt=""/> {item.activate.type}</p>
                            <p><b>Materials:</b> 
                                <ul className="materials-list">
                                {item.materials.map((material, index) => <li key={index}>{material}</li>)}
                                </ul></p>
                            <p><b>Description</b> { item.desc }</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
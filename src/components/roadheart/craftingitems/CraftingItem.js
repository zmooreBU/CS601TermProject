import { Link } from 'react-router-dom';

function CraftingItem({item}) {
    return (
        <Link to={`/CS601TermProject/projects/roadheart-repository/store/${item.sku}`} className="crafting-item">
            <img src={'/'+ item.imgURL}></img>
                <h2 className="item-title">{item.name}</h2>
                <div className="item-recipe">
                    <b>{item.type} {item.level}</b> <br />
                    <b>Materials Required:</b> 
                    <ul>
                        {item.materials.map((material, index) => <li key={index}>{material}</li>)}
                    </ul>
                </div>
        </Link>
    )
}

export default CraftingItem;
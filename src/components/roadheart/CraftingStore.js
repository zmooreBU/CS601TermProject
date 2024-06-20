import CraftingList from './craftingitems/CraftingList.js'
import RoadheartSidebar from './sidebar/RoadheartSidebar.js'

function CraftingStore() {
    return(
        <main className="roadheart-with-sidebar">
            <RoadheartSidebar/>
            <CraftingList />
        </main>
    );
}

export default CraftingStore;
import Header from './Header.js';
import RoadheartIntro from './RoadheartIntro.js';
import CraftingRules from './CraftingRules.js';
import CraftingStore from './CraftingStore.js'
import RoadheartNav from './RoadheartNav.js'
import './roadheartrepository.css';
import { Outlet, Routes, Route, Link } from 'react-router-dom';

function RoadheartRepository() {
    return(
        <div className="roadheart">
            <Header />
            
            <Routes>
                <Route index element={ 
                    <main className="roadheart-no-sidebar">
                        <RoadheartIntro />
                        <RoadheartNav />
                    </main>
                } />
                <Route path="/rules" element={<CraftingRules />} />
                <Route path="/store/*" element={<CraftingStore />} />
            </Routes>

            <Outlet />
        </div>
    );
}

export default RoadheartRepository;
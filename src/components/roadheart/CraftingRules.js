import {Link} from 'react-router-dom';

function CraftingRules() {
    return(
        <main className="roadheart-no-sidebar">
            <h1>Crafting Rules</h1>
            <h2>Materials</h2>
            <h3>Harvesting From Monsters</h3>
            <p>After a battle, the party can spend <b>10 minutes</b> gathering materials from slain creatures. This action succeeds automatically without a check. The party will receive a gold amount of material, with certain <b>traits</b>, eg.: </p>
            <ul className="materials-list">
                <li><b>12gp of Fire & Finesse material</b></li>
            </ul>
            <p>
            The party may choose the traits of the harvest material, and can split the total amount into different types of material. For example, if the party harvests a total of 20gp of material from a creature that can give Fire, Finesse, and Healing traits, they may choose to harvest </p>
            <ul className="materials-list">
                <li><b>10gp of Fire & Finesse</b></li>
                <li><b>10gp Fire & Healing</b></li>
            </ul>
            <p> or any other possible comination of gold amounts and traits.</p>
            <h3>Traits</h3>
            <p>Harvested materials have traits based on the monsters they were harvested from. This guides what the materials can be used for. The players can select these traits when harvesting the material based on the abilities of the creature they are harvesting from. Each material can have at most <b>two traits</b>.</p>
            <h3>Bulk</h3>
            <p>Materials typically vary in Bulk based on the original creature, but they tend to be extremely bulky. Typical Bulk values are light Bulk for Small creatures, 1 Bulk for Medium, 2 Bulk for Large, 4 Bulk for Huge, and 8 Bulk for Gargantuan. As such, it's usually a good idea to use harvested materials quickly.</p>
            <h3>Gathering More From Monsters</h3>
            <p>A PC with an appropriate <b>Lore</b> skill (such as <b>Dragon Lore</b> when harvesting from a dragon) can spend downtime carefully scavenging from a corpse to increase the value of scavenged parts. This uses <b>Earn Income</b> with a task level equal to the creature's level. On a critical failure, or once they have doubled the value of the materials, the PC has gathered everything they can from this creature's corpse.</p>
            <h3>Foraging</h3>
            <p>PCs may choose to <b>Forage</b> as a downtime activity. During this activity, the PC makes a <b>Nature</b> or <b>Survival</b>check in order to gather materials from their surrounding terrain. They amount of material follows the rules of the <b><a href="https://2e.aonprd.com/Actions.aspx?ID=2364&Redirected=1" className="roadheart-external-link">Earn Income</a></b> downtime activity. Through Foraging, a PC can harvest <b>Healing</b>, <b>Plant</b>, <b>Blugeoning</b> and <b>Piercing</b> material.</p>
            <h2>Crafting Items</h2>
            <p><b>Crafting</b> is the process through which raw materials are processed into useful items. In order to craft an item:</p>
            <ul>
                <li>You must know the recipe of the item. Known recipes can be seen on the <b><Link to="/projects/roadheart-repository/store" className="roadheart-external-link">Craftable Items</Link></b> page.</li>
                <li>The item must be your level of lower.</li>
                <li>For some items, you must have access to an appropriate set of tools or a workshop.</li>
                <li>You must have enough raw materials in the party inventory to cover the material cost of the item should you craft successfully.</li>
                <li>Once you have all necessary materials and tools, you roll a <b>Crafting</b> skill check. The DC of the check is based on the item's level.</li>
            </ul>
            <p>Unlike standard Pathfinder 2e Crafting, this Crafting action does not require multiple days of set up. It only takes a few hours and can be done once per day while travelling, for example after the party has stopped for the night and is preparing for a long rest.</p>
            <p><b>Critical Success</b> Your attempt is successful. The amount of material used to complete the item is halved.<br/>
            <b>Success</b> Your attempt is successful, and the materials required to complete it are used.<br/>
            <b>Failure</b> You fail to complete the item, but the materials required for the item can be salvaged. You may try again the following day.<br/>
            <b>Critical Failure</b> You fail to complete the item. Half of your materials are ruined in the attempt, but you can salvage the rest. You may try again the following day.</p>
            <Link to="/CS601TermProject/projects/roadheart-repository/store" className="roadheart-link"><img src="/assets/potion.svg" /><h2>View Craftable Items</h2></Link>
        </main>
    );
}

export default CraftingRules;
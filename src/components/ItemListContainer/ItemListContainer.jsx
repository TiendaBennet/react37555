import './itemlistcontainer.css';
import ItemList from "../ItemList/ItemList"


function ItemListContainer() {
    return (
        <div className="item-list__container">
            <main className="item-list__outer">
                
                <ItemList/>
            </main>
        </div>
    )
} 

export default ItemListContainer
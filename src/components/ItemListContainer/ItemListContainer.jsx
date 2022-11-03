import './itemlistcontainer.css';
import ItemList from "../ItemList/ItemList"
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getItems, getItemsByCategory, getItemsByType } from "../../services/firestore"


function ItemListContainer() {
        let [data, setData] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        let { cat, type } = useParams()
    
        useEffect(()=> {
            if(cat === undefined ) {
                getItems()
                    .then( (respuestaDatos) => setData(respuestaDatos))
                    .finally(() => setIsLoading(false))
            } else {
                getItemsByCategory(cat)
                    .then((respuestaDatos) =>  setData(respuestaDatos))
                    .finally(() => setIsLoading(false))
            }
        }, [cat])
    
    {/*El finally que da por rta setIsLoading(false) es para dar terminada la función */}    

        useEffect(()=> {
            if(type === undefined ) {
                getItems()
                .then( (respuestaDatos) => setData(respuestaDatos))
                .finally(() => setIsLoading(false))
            } else {
                getItemsByType(type)
                    .then((respuestaDatos) =>  setData(respuestaDatos))
                    .finally(() => setIsLoading(false))
            }
        }, [type])
        {/*Agregue en meet*/}
        console.log(data)

    return (
        <div className="item-list__container">
            <main className="item-list__outer">
                
                <ItemList data={data} isLoading={isLoading}/>
            </main>
        </div>
    )
} 

export default ItemListContainer
import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {ItemList} from "./ItemList";

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setItems(data.featured);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            {loading ? <Preloader/> : <ItemList items={items}/>}
        </main>);
}

export {Shop}
import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {ItemList} from "./ItemList";
import {Card} from "./Card";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])
    const [alertName, setAlertName] = useState('')
    const [isBasketShow, setBasketShow] = useState(false)

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            };
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder)
        }
        setAlertName(item.name)
    }

    const removeFromBasket = (itemId) => {
        const  newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder)
    }

    const increaseQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            }
            return el;
        })
        setOrder(newOrder);
    }
    const decreaseQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            }
            return el;
        })
        setOrder(newOrder);
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const closeAlert = () => {
        setAlertName('')
    }

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
            <Card quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading ? <Preloader/> : <ItemList items={items} addToBasket={addToBasket}/>
            }
            {
                isBasketShow && <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>);
}

export {Shop}
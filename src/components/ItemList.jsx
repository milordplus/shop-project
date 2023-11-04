import {ItemElement} from "./ItemElement";

function ItemList(props) {
    const {items = []} = props;

    if (!items.length) {
        return <h3>Nothing here</h3>
    }
    return (
        <div className="items">
            {items.map(item => (
                <ItemElement key={item.id} {...item}/>
            ))}
        </div>
    );
}

export {ItemList}
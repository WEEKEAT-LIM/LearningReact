import PropTypes from 'prop-types';
import styles from './List.module.css'

function List(props)
{
    const itemList = props.items;
    
    // fruits.sort((a, b) => a.calories - b.calories);
    const lowCalFruits = itemList.filter(fruit => fruit.calories < 50);



    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>
        {fruit.name} : &nbsp; <b>{fruit.calories}</b></li>);
    return (
    <>
    <h3 className={styles.listCategory}>{props.category}</h3>
    <ul className={styles.listItem}>{listItems}</ul>
    </>);
}

List.propTypes = 
{
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape(
        {id:PropTypes.number, 
            name:PropTypes.string, 
            calories:PropTypes.number
        }))
}

List.defaultProps = 
{
    category: "Category",
    items : [],
}

export default List
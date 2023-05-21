import CartItem from "components/CartItem"
import propTypes from 'prop-types'

export const CartItemList = ({items}) =>{
    return (
        <div className="cart-item-list">
            {
                items.map((item) =><CartItem key= {item.id} item={item}/>)
            }
        </div>
    )
};


CartItemList.propTypes ={
    items: propTypes.arrayOf(propTypes.shape(
        {
            count: propTypes.number.isRequired,
            price: propTypes.number.isRequired,

        }
    )),

};
export default CartItemList;
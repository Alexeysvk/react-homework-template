import ToDoinputForm from "components/Cartinputform";
import CartItemList from "components/CartItemList";
import Loader from "components/Loader";
import TotalAmount from "components/TotalAmout";

const InitialState = [
  {id:1, name: 'printer', price: 110, count: 2,},
  {id:2, name: 'RAM', price: 30, count: 1,},
  {id:3, name: 'motherboard', price: 150, count: 1,},
];

export const Cart =() => {
    return (
    <div className="cart"> 
      <ToDoinputForm /> 
      <Loader />
      <CartItemList items= {InitialState}/>
      <TotalAmount items={InitialState} /></div>
    );
};

export default Cart;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import "./styles.css";

export default function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <main className="App">
      {isLoading && (
        <div className="loading">
          <h1>Loadding....</h1>
        </div>
      )}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { getCart } from "./CartSlice";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order Pizzas
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;

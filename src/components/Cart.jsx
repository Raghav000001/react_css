import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, decreaseQty, increaseQty } from "../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <button
            onClick={dispatch(clearCart())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            {" "}
            Clear cart{" "}
          </button>
        </div>

        <div className="space-y-3">
          {cartItems &&
            cartItems.map((i) => (
              <div
                className="flex items-center justify-between bg-white rounded shadow p-4"
                key={i.id}
              >
                <div>
                  <h2 className="text-lg font-semibold">{i.name}</h2>
                  <p className="text-sm text-gray-600">
                    Price: <span className="font-medium">{i.price}</span>
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <span
                    onClick={dispatch(increaseQty())}
                    className="cursor-pointer bg-green-100 text-green-700 px-3 py-1 rounded"
                  >
                    {" "}
                    +{" "}
                  </span>
                  <span className="text-gray-700">{i.qty || 1}</span>
                  <span
                    onClick={dispatch(decreaseQty())}
                    className="cursor-pointer bg-yellow-100 text-yellow-700 px-3 py-1 rounded"
                  >
                    {" "}
                    -{" "}
                  </span>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-6 border-t pt-4">
          <p className="text-xl font-bold">
            Total: <span className="text-indigo-600">{totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

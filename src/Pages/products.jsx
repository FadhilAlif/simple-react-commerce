import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/productApi";
import { DarkMode } from "../components/context/DarkMode";

// const ProductData = [
//   {
//     id: 1,
//     image: "images/compass-wb.jpg",
//     image2: "images/compass-wb2.jpg",
//     title: "GAZELLE HI WHITE BLUE",
//     description:
//       "Inspired bythe 1950s, the Gazelle Hi took an iconic silhouette and gave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh.",
//     price: 408000,
//     discount: 10,
//   },
//   {
//     id: 2,
//     image: "images/compass-wb.jpg",
//     image2: "images/compass-wb2.jpg",
//     title: "GAZELLE HI WHITE",
//     description:
//       " the Gazelle an iconic silhouette and gave ittook an iconic silhouette and gave ittook an iconic silhouette and gave ittook an iconic silhouette and gave ittook an iconic silhouette and gave itave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh.",
//     price: 408000,
//     discount: 10,
//   },
//   {
//     id: 3,
//     image: "images/compass-wb.jpg",
//     image2: "images/compass-wb2.jpg",
//     title: "GAZELLE HI",
//     description: "Ins fresh.",
//     price: 408000,
//     discount: 10,
//   },
//   {
//     id: 4,
//     image: "images/compass-wb.jpg",
//     image2: "images/compass-wb2.jpg",
//     title: "GAZELLE",
//     description:
//       "Inspired bythe 1950s, the Gazelle Hi took an iconic silhouette and gave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh.",
//     price: 1000000,
//     discount: 10,
//   },
// ];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  // const token = localStorage.getItem("token");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sumTotalPrice = cart.reduce((total, item) => {
        const product = products.find((p) => p.id === item.product.id);
        return total + product.price * item.quantity;
      }, 0);
      setTotalPrice(sumTotalPrice);
      localStorage.getItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  // const handleAddToCart = (id) => {
  //   const productToAdd = products.find((product) => product.id === id);
  //   const existingCartItem = cart.find((item) => item.product.id === id);

  //   if (existingCartItem) {
  //     setCart(
  //       cart.map((item) =>
  //         item.product.id === id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart([
  //       ...cart,
  //       {
  //         product: productToAdd,
  //         quantity: 1,
  //       },
  //     ]);
  //   }
  // };

  return (
    <Fragment>
      <div className="flex justify-end items-center p-3 bg-blue-700 text-white">
        {/* {email} */}
        <Button
          className="ml-5 mr-5 px-3 h-8 bg-slate-950 hover:bg-slate-800 border-none"
          onClick={handleLogout}
        >
          Logout
        </Button>
        <Button
          className="px-3 h-8 bg-slate-950 hover:bg-slate-800 border-none"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
      <div
        className={`flex justify-center scroll-py-10 ${
          isDarkMode ? "bg-black" : "bg-slate-100"
        }`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => {
            return (
              <CardProduct
                key={product.id}
                id={product.id}
                image={product.image}
                image2={product.image2}
                title={product.title}
                description={product.description}
                price={product.price}
                discount={product.discount}
                // handleAddToCart={() => handleAddToCart(product.id)}
              />
            );
          })}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl py-2 font-bold text-blue-700 mb-2">Cart</h1>
          <table
            className={`w-full border-collapse ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <thead className="text-left">
              <tr className="border-b">
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Qty</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => (
                  <tr key={item.product.id} className="border-b">
                    <td>{item.product.title.substring(0, 20)}</td>
                    <td>
                      {item.product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {(item.product.price * item.quantity).toLocaleString(
                        "id-ID",
                        {
                          style: "currency",
                          currency: "USD",
                        }
                      )}
                    </td>
                  </tr>
                ))}
              <tr>
                <td colSpan={3} className="font-bold">
                  Total Price :
                </td>
                <td className="font-bold">
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;

import { Link } from "react-router-dom";
import Button from "../Elements/Button/index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = ({
  id,
  image,
  image2,
  title,
  description,
  price,
  handleAddToCart,
  discount,
}) => {
  return (
    <div className="group my-5 mx-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md">
      <Header image={image} image2={image2} discount={discount} id={id} />
      <div className="mt-2 px-5 pb-5">
        <Body title={title} description={description} />
        <Footer price={price} handleAddToCart={handleAddToCart} id={id} />
      </div>
    </div>
  );
};

const Header = ({ image, image2, discount, id }) => (
  <div className="relative group">
    <Link
      to={`/products/${id}`}
      className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl relative"
    >
      <img
        className="w-full h-full object-cover rounded-xl transition-transform duration-300 transform"
        src={image}
        alt="Product Image"
      />
      {image2 && (
        <img
          className="absolute top-0 right-0 h-full w-full object-cover transition-transform duration-1000 transform translate-x-full group-hover:translate-x-0"
          src={image2}
          alt="Hover Image"
        />
      )}
    </Link>
    {discount && (
      <span className="absolute top-1 left-1 m-3 rounded-full bg-blue-700 px-2 text-center text-sm font-medium text-white">
        {discount}% OFF
      </span>
    )}
    <div className="absolute bottom-0 mb-4 flex space-x-4 w-full justify-center">
      <div className="rounded-full h-3 w-3 bg-blue-200 border-2 border-white" />
      <div className="rounded-full h-3 w-3 bg-blue-200 border-2 border-white" />
    </div>
  </div>
);

const Body = ({ title, description }) => (
  <div className="flex flex-col h-[100px]">
    <a href="#">
      <h5 className="text-xl font-bold tracking-tight text-blue-700 mb-2">
        {title.substring(0, 20)}
      </h5>
    </a>
    <div className="flex-grow overflow-hidden">
      <p className="font-normal text-sm text-slate-500 overflow-ellipsis overflow-hidden">
        {description.substring(0, 100)}
      </p>
    </div>
  </div>
);

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span className="text-3xl font-bold text-blue-700">
            {price.toLocaleString("id-ID", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </p>
      </div>
      <Button
        className="w-full bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm"
        onClick={() => dispatch(addToCart({ id, quantity: 1 }))}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default CardProduct;

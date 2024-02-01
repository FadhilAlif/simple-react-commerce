import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/productApi";

const DetailProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProducts(data);
    });
  }, [id]);

  return (
    <div className="w-100 min-h-screen flex justify-center items-center">
      {Object.keys(products).length > 0 ? (
        <div className="flex font-sans max-w-xl gap-2">
          <div className="flex-none w-48 relative">
            <img
              src={products.image}
              alt={products.title}
              className="absolute inset-0 w-full h-full object-contain object-center"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-bold text-slate-900">
                {products.title}
              </h1>
              <div className="text-lg font-bold text-slate-900">$110.00</div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                <span className="font-bold">Rate {products.rating.rate} </span>/
                5.0 ({products.rating.count})
              </div>    
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                {products.description}
              </div>
            </div>
            <div className="flex items-baseline mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm"></div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-slate-300 text-slate-900"
                  type="button"
                >
                  Add to bag
                </button>
              </div>
            </div>
            <p className="text-sm text-slate-700">
              Free shipping for Java area.
            </p>
          </form>
        </div>
      ) : (
        <div className="text-3xl text-red-600">Oops Product not found</div>
      )}
    </div>
  );
};

export default DetailProduct;

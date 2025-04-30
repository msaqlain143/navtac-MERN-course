// src/App.jsx
import React, { useEffect, useRef } from "react";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";
import { increment, incrementByValue } from "./store/CounterSlice/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import { productThunk } from "./store/ProductSlice/ProductSlice.jsx";

const App = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function handleIncrementByValue() {
    const value = parseInt(inputRef.current.value, 10);
    if (!isNaN(value)) {
      s;
      dispatch(incrementByValue(value));
    }
    inputRef.current.value = "";
  }

  useEffect(() => {
    dispatch(productThunk());
  }, [dispatch]);

  const { loading, error, products } = useSelector((state) => {
    return state.products;
  });

  console.log(products);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 flex flex-col items-center gap-8">
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <input
                ref={inputRef}
                type="number"
                className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
              />
              <button
                onClick={handleIncrementByValue}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                Increment By Value
              </button>
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <hr className="border-t border-gray-400 my-8" />

            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Our Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loading && (
                <div className="text-lg text-gray-600 col-span-full text-center">
                  Loading products...
                </div>
              )}
              {error && (
                <div className="text-red-500 col-span-full text-center">
                  Error loading products: {error}
                </div>
              )}
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
                >
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description
                        ? product.description.substring(0, 50) + "..."
                        : "No description available."}
                    </p>
                    {product.price && (
                      <p className="text-indigo-600 font-bold mt-2">
                        ${product.price.toFixed(2)}
                      </p>
                    )}
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;

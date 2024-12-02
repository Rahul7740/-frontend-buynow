import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import productss from "../json/cart-procuts.json";
import Summary from "../snippets/Summary";
import "../style/order-Summary.css";
import { toast } from "react-toastify";

function OrderSummary() {
  // function quntityMinus(e) {
  //   const pElement = e.currentTarget.nextElementSibling;
  //   let currentQuantity = Number(pElement.innerHTML);
  //   if (currentQuantity > 0) {
  //     pElement.innerHTML = currentQuantity - 1;
  //   }
  // }
  // function quntityPlus(e) {
  //   const pElement = e.currentTarget.previousElementSibling;
  //   let currentQuantity = Number(pElement.innerHTML);
  //   pElement.innerHTML = currentQuantity + 1;
  // }
  // const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  // const [productPrice, setProductPrice] = useState(0);
  let subtotal = 0;

  const updateQuantiy = async (id, qty) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/updateQty", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id.id,
          qty: qty,
          price: id.colors[id.colorsSelect[0]].price,
        }),
      });
      if (response.ok) {
        const messageData = await response.json();
        toast.success(messageData.message);
        setReloadData(!reloadData);
      } else {
        const errorData = await response.json();
        toast.error(`${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  function quntityMinus(e, id, idx) {
    const pElement = e.currentTarget.nextElementSibling;
    let currentQuantity = Number(pElement.innerHTML);
    if (currentQuantity > 1) {
      pElement.innerHTML = currentQuantity - 1;
      updateQuantiy(id, pElement.innerHTML);
      // priceHandle(id, pElement.innerHTML);
    }
  }
  function quntityPlus(e, id, idx) {
    const pElement = e.currentTarget.previousElementSibling;
    let currentQuantity = Number(pElement.innerHTML);
    pElement.innerHTML = currentQuantity + 1;
    updateQuantiy(id, pElement.innerHTML);
    // priceHandle(id, pElement.innerHTML);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cart/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, [reloadData]);

  useEffect(() => {
    const fetchCartData = async () => {
      const promises = data.map(async (item) => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/products/getSingleProduct/${item.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          return await response.json();
        } catch (error) {
          console.error("Error fetching product data:", error);
          return null;
        }
      });

      const results = await Promise.all(promises);
      setProducts(results.filter((product) => product !== null));
    };

    if (data.length > 0) {
      fetchCartData();
    }
  }, [data]);

  const removeItem = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/remove/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        toast.success("Remove successfully");
        setReloadData(!reloadData);
      } else {
        const errorData = await response.json();
        toast.error(`${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Cart Products</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/checkout"}>
                Checkout
              </Link>
            </div>
          </div>
          <div className="stepper">
            <div className="stepper-line-container">
              <Link to={"/deliveryAdress"} className="abcd active-shadow">
                <h4 className="stepper-label activeTxt">Delivery Address</h4>
                <div className="stepper-dots activeDot"></div>
              </Link>
              <div className="stepper-line activeline"></div>
              <Link to={"/orderSummary"} className="abcd active-shadow">
                <h4 className="stepper-label activeTxt">Order Summary</h4>
                <div className="stepper-dots activeDot"></div>
              </Link>
              <div className="stepper-line"></div>
              <Link to={"/paymentOption"} className="abcd">
                <h4 className="stepper-label">Payment Option</h4>
                <div className="stepper-dots"></div>
              </Link>
              <div className="stepper-line"></div>
              <div className="abcd">
                <h4 className="stepper-label">Complete Order</h4>
                <div className="stepper-dots"></div>
              </div>
            </div>
          </div>
          <div className="deliveryAdress-section">
            <div className="deliveryAddress-container">
              <h3>Order Summary</h3>
              <div className="orderSummary-Main-container">
                {data.length > 0 ? (
                  products.map((i, index) => (
                    <div key={index} className="orderSummary-products">
                      <div className="orderSummary-imgs">
                        <img
                          className="max-h-[120px] 2xl:w-[164px] w-[auto] "
                          src={`http://localhost:5000/api/products/uploads/${i.image}`}
                          alt="cart-img"
                        />
                      </div>
                      <div className="orderSummary-prdt-details ">
                        <div className="orderSummary-prdt-heading">
                          <h3>{i.title}</h3>
                          <p>{i.description}</p>
                          {/* <p className="display-none-block-700">{i.shortP}</p> */}
                        </div>

                        <div className="orderSummary-quantity-container">
                          <div className="orderSummary-quantity">
                            <button
                              onClick={(e) => {
                                quntityMinus(e, i, index);
                              }}
                            >
                              <img src={SvgPath.minus} alt="minus" />
                            </button>
                            <p>{data[index]?.qty}</p>
                            <button
                              onClick={(e) => {
                                quntityPlus(e, i, index);
                              }}
                            >
                              <img src={SvgPath.plus} alt="plus" />
                            </button>
                          </div>
                          <div className="orderSummary-quantity-controls">
                            <h3 className="">{`$${data[index]?.price}.00`}</h3>
                            <h1 className="hidden">
                              {(subtotal += Number(data[index]?.price))}
                            </h1>
                            <button
                              className="cancel-btn remove-btn"
                              onClick={() => {
                                removeItem(i.id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center flex-col gap-4">
                    <h1 className="text-[20px] text-center text-[#422659]">
                      Your buynow Cart is empty 😟
                    </h1>
                    <Link
                      to={"/productsFilter"}
                      className="cart-checkOut-btn"
                      style={{ width: "auto" }}
                    >
                      add items
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <Summary items={data.length} subtotal={subtotal} />
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderSummary;

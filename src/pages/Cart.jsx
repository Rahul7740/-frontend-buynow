import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";
import "../style/cart.css";
// import productss from "../json/cart-procuts.json";
import RelatedItemYourSearch from "../snippets/RelatedItemYourSearch";
import { toast } from "react-toastify";

function Cart() {
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
        body: JSON.stringify({ id: id.id, qty: qty, price: id.colors[id.colorsSelect[0]].price }),
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

  // function priceHandle(i, qty) {
  //   const p =
  //     Number(
  //       i.colors[i.colorsSelect[0]].price.slice(
  //         1,
  //         i.colors[i.colorsSelect[0]].price.length
  //       )
  //     ) * qty;
  //   setProductPrice(p);
  // }
  // console.log(productPrice);

  return (
    <>
      <section className="all-sections">
        <div className="container">
          <div className="sections-header">
            <h2>Cart Products</h2>
            <div className="pages-directions-div">
              <Link to={"/"}>Home</Link>
              <img src={SvgPath.arrowLIneRight} alt="forword" />
              <Link style={{ color: "#1F292D" }} to={"/cart"}>
                Cart
              </Link>
            </div>
          </div>
          <div className="cart-main-container">
            {data.length > 0 ? (
              products?.map((i, index) => (
                <div key={index} className="cart-Products">
                  <div className="cart-product-details-cont">
                    <div className="cart-products-images">
                      <img
                        src={`http://localhost:5000/api/products/uploads/${i.image}`}
                        alt="cart-img"
                      />
                    </div>
                    <div className="cart-prdt-details">
                      <div>
                        <h3>{i.title}</h3>
                        <p className="cart-paras">{i.description}</p>
                      </div>
                      <div className="cart-style-collections">
                        <div className="style-collections">
                          <h4>{i.size[0].size}</h4>
                          <p>Size</p>
                        </div>
                        <img
                          className="display-none-950"
                          src={SvgPath.verticalLine20px}
                          alt="vertical"
                        />
                        <div className="style-collections display-none-950">
                          <h4>{i.styleName[0]}</h4>
                          <p>Style</p>
                        </div>
                        <img
                          className="display-none-950"
                          src={SvgPath.verticalLine20px}
                          alt="vertical"
                        />
                        <div className="style-collections display-none-950">
                          <span
                            style={{
                              background:
                                i.colorsSelect[Math.round(Math.random() * 3)],
                            }}
                            id="color1"
                          ></span>
                          <label htmlFor="color1">
                            <p>Color</p>
                          </label>
                        </div>
                      </div>
                      <div className="cart-products-quantity-cont">
                        <div className="cart-products-quantity">
                          <button
                            onClick={(e) => {
                              quntityMinus(e, i, index);
                            }}
                          >
                            <img src={SvgPath.minus} alt="minus" />
                          </button>
                          <span className="w-[26px] sm:w-auto">
                            {data[index]?.qty}
                          </span>

                          <button
                            onClick={(e) => {
                              quntityPlus(e, i, index);
                            }}
                          >
                            <img src={SvgPath.plus} alt="plus" />
                          </button>
                        </div>
                        <p>Free shipping</p>
                      </div>
                    </div>
                  </div>
                  <span className="lineee"></span>
                  <div className="cart-products-price">
                    <h2>{`$${data[index]?.price}.00`}</h2>
                    <h1 className="hidden">
                      {
                        (subtotal += Number(data[index]?.price))
                      }
                    </h1>
                    <button
                      onClick={() => {
                        removeItem(i.id);
                      }}
                    >
                      Remove
                    </button>
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
          <div className="cart-EMI-checkOut-container">
            <div className="emi-container">
              <div className="emi-header">
                <h3>EMI Available</h3>
                <p className="emi-para">
                  No Cost EMI offers. Id aliquam felis a
                  <span>
                    {" "}
                    egestas mi diam erat eu habitasse. Please check EMI plans
                  </span>
                  ..
                </p>
                <button>
                  <p style={{ color: "#C4CFD4" }}>Learn more&#62;</p>
                </button>
              </div>
              <div className="emi-debit-Credit-container">
                <div className="debit-credit">
                  <button>Cradit card</button>
                  <button className="debit-btn">debit card</button>
                </div>
                <img src={SvgPath.debitCredit} alt="debit card" />
              </div>
            </div>
            <div className="check-Out-card">
              <div className="check-Out-card-header">
                <div className="space-between">
                  <p style={{ color: "#1F292D" }}>Subtotal</p>
                  <p>{"$" + subtotal + ".00"}</p>
                </div>
                <div className="space-between">
                  <p style={{ color: "#1F292D" }}>Item</p>
                  <p>{products.length}</p>
                </div>
                <div className="space-between">
                  <p style={{ color: "#1F292D" }}>Shipping</p>
                  <p>Free</p>
                </div>
              </div>
              <div className="space-between">
                <p style={{ color: "#1F292D" }}>Total</p>
                <h3>{"$" + subtotal + ".00"}</h3>
              </div>
              <Link to={"/checkout"} className="cart-checkOut-btn">
                Check out
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RelatedItemYourSearch name="Related item your search" />
    </>
  );
}

export default Cart;

// App.js

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import ProductInfo from "./components/ProductInfo";
import PersonDetailsTwo from "./components/PersonDetailsTwo";
import FormDetails from "./components/FormDetails";
import PaymentPage from "./components/PaymentPage";
import AddressPage from "./components/AddressPage";
import ConfirmPage from "./components/ConfirmPage";

const App = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const product = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      name: "White Shoes",
      category: "Accessries",
      seller: "AMZ Seller Ghz",
      price: 1999,
    },
    {
      id: 2,
      url: "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
      name: "Watch",
      category: "Accessries",
      seller: "Watch Ltd Siyana",
      price: 2599,
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU",
      name: "Acer Laptop 8GB RAM",
      category: "Electronics",
      seller: "Delhi Laptops",
      price: 50000,
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU",
      name: "Electronics",
      category: "CCTV",
      seller: "Camron LTD",
      price: 4000,
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU",
      name: "Titan Watch Pink",
      category: "Accessries",
      seller: "Watch Ltd",
      price: 2000,
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU",
      name: "Cup red Color",
      category: "Appliances",
      seller: "ABS Ltd",
      price: 100,
    },

    {
      id: 7,
      url: "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2022/5/Seller/22202970/Images/22202970_0_men-shirts.jpg?tr=w-320,h-320,cm-pad_resize,bg-F3F3F3",
      name: "Levi;s Shirt",
      category: "Fashion",
      seller: "Levi's",
      price: 2000,
    },

    {
      id: 8,
      url: "https://4.imimg.com/data4/TX/BR/MY-22153202/plain-men-shirts-1000x1000.jpg",
      name: "Dlingo Shirt",
      category: "Fashion",
      seller: "Basics",
      price: 2500,
    },
    {
      id: 9,
      url: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m045flggins/gallery/in-galaxy-m04-4gb-64gb-sm-m045flggins-534598046?$2052_1641_PNG$",
      name: "Samsung M32",
      category: "Electronics",
      seller: "Amazon",
      price: "9999",
    },

    {
      id: 10,
      url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxZQJXn1-yKuU_01uEK2Xlv3AyiFEeIa-FyDNULXySu-fVmewuz6RgE8KUNgog_XXT66UGDK2_xeP-0xNsPVsCykWE_RvKa0d-puULp_5k69DKTPdM6hbY2w",
      name: "Iphone 12",
      category: "Electronics",
      seller: "Flipkart",
      price: "35000",
    },

    {
      id: 10,
      url: "https://cdn1.smartprix.com/rx-ihIBo5dkr-w280-h280/oppo-find-x6-pro.webp",
      name: "Oppo   Reno 8pro",
      category: "Electronics",
      seller: "Amazon",
      price: "38000",
    },
    {
      id: 11,
      url: "https://rukminim1.flixcart.com/image/416/416/l47cu4w0/television/9/0/f/-original-imagf5qummst7t94.jpeg?q=70",
      name: "Sony Bravia 44inch",
      category: "Electronics",
      seller: "Amazon",
      price: "25000",
    },
  ];
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // const [CART, setCART] = useState([]);
  // const searchItems = product.filter((eachItem) => {
  //   return eachItem.name.toLowerCase().includes(search.toLowerCase());
  // });

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    navigate("/");
    setShowCart(value);
    setCategorys(searchItems);
    localStorage.setItem("data", JSON.stringify(searchItems));
  };
  const removeHandler = (item) => {
    const removeItem = cart.splice(item, 1);
    setCart([...cart]);
  };
  const buyNowHandler = () => {
    navigate("/person-details");
  };

  const [user, setUser] = useState([]);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [PIN, setPIN] = useState("");
  const [categorys, setCategorys] = useState([]);

  const onSubmitAddressBtnHandler = (e) => {
    e.preventDefault();
    const userData = {
      fName,
      lName,
      email,
      adress,
      number,
      PIN,
    };
    setUser([userData]);
    setFname("");
    setLname("");
    setEmail("");
    setNumber("");
    setAdress("");
    setPIN("");
    navigate("/address-page");
  };

  const categoryHandler = (categoryItems) => {
    const items = product.filter((each) => each.category === categoryItems);
    setCategorys([...items]);
    localStorage.setItem("data", JSON.stringify(items));
    console.log(items);
  };
  const dd = JSON.parse(localStorage.getItem("data"));
  const [CART, setCART] = useState([]);

  const searchItems = product.filter((eachItem) => {
    return eachItem.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            showCart ? (
              <CartList
                CART={CART}
                setCART={setCART}
                cart={cart}
                removeHandler={removeHandler}
                buyNowHandler={buyNowHandler}
                search={search}
                setSearch={setSearch}
                count={cart.length}
                handleShow={handleShow}
              />
            ) : (
              <ProductList
                product={product}
                searchItems={searchItems}
                addToCart={addToCart}
                search={search}
                setSearch={setSearch}
                count={cart.length}
                handleShow={handleShow}
                categoryHandler={categoryHandler}
                categorys={categorys}
                setCategorys={setCategorys}
                dd={dd}
              />
            )
          }
        ></Route>

        <Route
          path={"/product-info/:id"}
          element={
            <ProductInfo
              searchItems={searchItems}
              addToCart={addToCart}
              product={product}
              CART={CART}
              setCART={setCART}
              cart={cart}
              removeHandler={removeHandler}
              buyNowHandler={buyNowHandler}
              search={search}
              setSearch={setSearch}
              count={cart.length}
              handleShow={handleShow}
            />
          }
        />
        <Route
          path="/product-details"
          element={<PersonDetailsTwo CART={CART} cart={cart} />}
        ></Route>

        <Route
          path="/payment-page"
          element={<PaymentPage CART={CART} user={user} />}
        ></Route>
        <Route
          path="/form-page"
          element={
            <FormDetails
              onSubmitAddressBtnHandler={onSubmitAddressBtnHandler}
              user={user}
              setUser={setUser}
              fName={fName}
              setFname={setFname}
              lName={lName}
              setLname={setLname}
              adress={adress}
              setAdress={setAdress}
              number={number}
              setNumber={setNumber}
              email={email}
              setEmail={setEmail}
              PIN={PIN}
              setPIN={setPIN}
            />
          }
        ></Route>
        <Route
          path="/address-page"
          element={<AddressPage user={user} />}
        ></Route>
        <Route path="/confirm-page" element={<ConfirmPage />}></Route>
      </Routes>
    </div>
  );
};
// export default App;

//productList.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Corousal from "./Corousal";
import img1 from "./Images/shopping-cart.png";
import "../App.css";

const ProductList = ({
  addToCart,
  count,
  handleShow,
  search,
  setSearch,
  categoryHandler,
  dd,
  searchItems,
}) => {
  const [sorts, setSort] = useState("ascending");
  const [showSeachData, setShowSearchData] = useState(false);
  const onChangeHeaderInp = (e) => {
    setSearch(e.target.value);
    setShowSearchData(true);
  };
  const sortProducts = dd.sort((a, z) => {
    if (sorts === "ascending") {
      return a.name.localeCompare(z.name);
    } else if (sorts === "descending") {
      return z.name.localeCompare(a.name);
    }
  });

  // we have to remove ternary operator and add only searchItems or dd
  // when who have to add searchItems search Inputs worked
  // and add dd it worked only category items

  return (
    <div>
      <header>
        <div className="flex shopping-card">
          <h1 className="shoppingCardHeading" onClick={() => handleShow(false)}>
            Online Delivery App
          </h1>

          <input
            className="headerInput"
            value={search}
            // onChange={(e) => setSearch(e.target.value)}
            onChange={onChangeHeaderInp}
            type="text"
            placeholder="Search your Products"
          />

          <div>
            <img
              className="cartImg"
              src={img1}
              onClick={() => handleShow(true)}
            />
            <sup className="countHeading">{count}</sup>
          </div>
        </div>
      </header>

      <div className="homePageCategoryContainer">
        <div className="homePageCategoryItemContainer">
          <img
            className="homePageCategoryImg"
            src="https://media.istockphoto.com/id/166107706/photo/mobility-concept-with-digital-devices-on-laptop.jpg?s=1024x1024&w=is&k=20&c=38kZDJpBO6ExEFLl4gx3OvwErxub4k9rlSFIr-MwjwE="
          />
          <h6 className="homePageCategoryAnchorTag">
            <a
              onClick={() => categoryHandler("Electronics")}
              className="homePageCategoryAnchorTag"
              href=""
            >
              Electronics
            </a>
          </h6>
        </div>

        <div className="homePageCategoryItemContainer">
          <img
            className="homePageCategoryImg"
            src="https://5.imimg.com/data5/UH/QD/MY-9493840/lg-single-door-refrigerator-500x500.jpg"
          />
          <h6>
            <a
              onClick={() => categoryHandler("Appliances")}
              className="homePageCategoryAnchorTag"
              href=""
            >
              Appliances
            </a>
          </h6>
        </div>

        <div className="homePageCategoryItemContainer">
          <img
            className="homePageCategoryImg"
            src="https://cdn.vectorstock.com/i/1000x1000/26/62/fashion-accessories-set-9-vector-15992662.webp"
          />
          <h6>
            <a
              onClick={() => categoryHandler("Accessries")}
              className="homePageCategoryAnchorTag"
              href=""
            >
              Accessries
            </a>
          </h6>
        </div>

        <div className="homePageCategoryItemContainer">
          <img
            className="homePageCategoryImg"
            src="https://m.media-amazon.com/images/I/61wITScmQWL._UY741_.jpg"
          />
          <h6>
            <a
              onClick={() => categoryHandler("Fashion")}
              className="homePageCategoryAnchorTag"
              href=""
            >
              Fashion
            </a>
          </h6>
        </div>
      </div>
      <div className="sort-container">
        <h6 className="sortBy">Sort By:</h6>
        <select value={sorts} onChange={(e) => setSort(e.target.value)}>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
        </select>
      </div>

      <div>{/* <Corousal /> */}</div>

      <div className="flex">
        {showSeachData
          ? searchItems.map((productItem, productIndex) => {
              return (
                <div
                  className="text-center producListContainer"
                  key={productIndex}
                  style={{ width: "25%" }}
                >
                  <div className="product-item">
                    <img src={productItem.url} width="50%" alt="img" />
                    <div className="productListItemsHeigth">
                      <p>
                        {productItem.name} | {productItem.category}
                      </p>
                      <p>{productItem.seller}</p>
                      <p>Rs. {productItem.price}/-</p>
                    </div>
                    <button
                      className="addToCartButton btn btn-primary"
                      onClick={() => addToCart(productItem)}
                    >
                      Add To Cart
                    </button>

                    <button className="btn btn-info viewBtn">
                      <Link
                        className="text-white viewBtn"
                        to={`/product-info/${productItem.id}`}
                      >
                        View
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })
          : dd.map((productItem, productIndex) => {
              return (
                <div
                  className="text-center producListContainer"
                  key={productIndex}
                  style={{ width: "25%" }}
                >
                  <div className="product-item">
                    <img src={productItem.url} width="50%" alt="img" />
                    <div className="productListItemsHeigth">
                      <p>
                        {productItem.name} | {productItem.category}
                      </p>
                      <p>{productItem.seller}</p>
                      <p>Rs. {productItem.price}/-</p>
                    </div>
                    <button
                      className="addToCartButton btn btn-primary"
                      onClick={() => addToCart(productItem)}
                    >
                      Add To Cart
                    </button>

                    <button className="btn btn-info viewBtn">
                      <Link
                        className="text-white viewBtn"
                        to={`/product-info/${productItem.id}`}
                      >
                        View
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductList;

//CartList.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./Images/shopping-cart.png";
import "../App.css";

const CartList = ({
  cart,
  removeHandler,
  CART,
  setCART,
  count,
  handleShow,
  cartShow,
  homeShow,
}) => {
  useEffect(() => {
    setCART(cart);
  }, [cart]);
  const [emptyCart, setEmptyCart] = useState(false);
  const totalCartValue = CART.map((item) => item.price * item.quantity).reduce(
    (total, value) => total + value,
    0
  );
  console.log(totalCartValue);
  // if (totalCartValue === 0) {
  //   setEmptyCart(true);
  // } else  {
  //   setEmptyCart(false);
  // }
  return (
    <div className="cartListMainContainer">
      <header>
        <header>
          <div className="flex shopping-card">
            <h1 className="shoppingCardHeading" onClick={homeShow}>
              Online Delivery App
            </h1>
            <div onClick={cartShow}>
              <img className="cartImg" src={img1} />
              <sup className="countHeading">{count}</sup>
            </div>
          </div>
        </header>
      </header>
      <h1 className="text-center">Cart Items</h1>
      <div className="cartListContainer text-center">
        {CART?.map((cartItem, cartIndex) => {
          return (
            <div>
              <div>
                <div>
                  <h6>{cartItem.name}</h6>
                </div>
                <div>
                  <img className="classListImg" src={cartItem.url} alt="img" />
                </div>
                <div>
                  <button
                    className="cartMinusBtn"
                    onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartIndex === index
                          ? {
                              ...item,
                              quantity:
                                item.quantity > 0 ? item.quantity - 1 : 0,
                            }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    -
                  </button>
                  <span className="quantityTitle">{cartItem.quantity}</span>
                  <button
                    className="cartPlusBtn"
                    onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartIndex === index
                          ? { ...item, quantity: item.quantity + 1 }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    +
                  </button>
                </div>
                <span className="classListItemCost">
                  Rs. {cartItem.price * cartItem.quantity}
                </span>
              </div>
              <button
                onClick={() => {
                  removeHandler();
                }}
                className="btn btn-secondary"
              >
                Remove Cart
              </button>
            </div>
          );
        })}
      </div>
      <p className="totalPricePara">
        <span className="totalPrice p-1">
          Total :{" "}
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </span>
      </p>

      <div className="text-center">
        <Link to="/">
          <button className="btn btn-danger mr-3 backAndBuyNowBtn">Back</button>
        </Link>
        <Link to="/product-summery">
          <button className="btn btn-success ml-3">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

//export default CartList;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import ProductInfo from "./components/ProductInfo";
import ProductSummery from "./components/ProductSummery";
import FormDetails from "./components/FormDetails";
import PaymentPage from "./components/PaymentPage";
import Capcha from "./components/Capcha";
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
  const homeShow = (value) => {
    navigate("/");
    setShowCart(value);
    setCategorys(searchItems);
    localStorage.setItem("data", JSON.stringify(searchItems));
  };
  const cartShow = (value) => {
    navigate("/cart-list");
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
            <ProductList
              product={product}
              searchItems={searchItems}
              addToCart={addToCart}
              search={search}
              setSearch={setSearch}
              count={cart.length}
              // handleShow={handleShow}
              categoryHandler={categoryHandler}
              categorys={categorys}
              setCategorys={setCategorys}
              dd={dd}
              homeShow={homeShow}
              cartShow={cartShow}
            />
          }
        />
        <Route
          path="/cart-list"
          element={
            <CartList
              CART={CART}
              setCART={setCART}
              cart={cart}
              removeHandler={removeHandler}
              buyNowHandler={buyNowHandler}
              search={search}
              setSearch={setSearch}
              count={cart.length}
              homeShow={homeShow}
              // handleShow={handleShow}
              cartShow={cartShow}
            />
          }
        />

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
              cartShow={cartShow}
              homeShow={homeShow}
            />
          }
        />
        <Route
          path="/product-summery"
          element={<ProductSummery CART={CART} cart={cart} />}
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
        <Route path="/address-page" element={<Capcha user={user} />}></Route>
        <Route path="/confirm-page" element={<ConfirmPage />}></Route>
        {/* <Route path="login-form" element={<LoginForm />}></Route>
        <Route path="/sighup-form" element={<SighUpForm />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;

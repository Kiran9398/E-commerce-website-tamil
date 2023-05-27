import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import img1 from "./Images/shopping-cart.png";
import "../App.css";

const product = [
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
    name: "White Shoes",
    category: "Shoes",
    seller: "AMZ Seller Ghz",
    price: 1999,
  },
  {
    id: 2,
    url: "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
    name: "Watch",
    category: "Watches",
    seller: "Watch Ltd Siyana",
    price: 2599,
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU",
    name: "Acer Laptop 8GB RAM",
    category: "Laptops",
    seller: "Delhi Laptops",
    price: 50000,
  },
  {
    id: 4,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU",
    name: "Security Camera",
    category: "CCTV",
    seller: "Camron LTD",
    price: 4000,
  },
  {
    id: 5,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU",
    name: "Titan Watch Pink",
    category: "Watches",
    seller: "Watch Ltd",
    price: 2000,
  },
  {
    id: 6,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU",
    name: "Cup red Color",
    category: "Cup",
    seller: "ABS Ltd",
    price: 100,
  },

  {
    id: 7,
    url: "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2022/5/Seller/22202970/Images/22202970_0_men-shirts.jpg?tr=w-320,h-320,cm-pad_resize,bg-F3F3F3",
    name: "Dress",
    category: "dress",
    seller: "Levi's",
    price: 2000,
  },

  {
    id: 8,
    url: "https://4.imimg.com/data4/TX/BR/MY-22153202/plain-men-shirts-1000x1000.jpg",
    name: "Dress",
    category: "dress",
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
    name: "Oppo Reno 8Pro",
    category: "Electronics",
    seller: "Amazon",
    price: "38000",
  },
  {
    id: 11,
    url: "https://rukminim1.flixcart.com/image/416/416/l47cu4w0/television/9/0/f/-original-imagf5qummst7t94.jpeg?q=70",
    name: "TSony Bravia 44inch",
    category: "Electronics",
    seller: "Amazon",
    price: "25000",
  },
];

const ProductInfo = ({
  product,
  addToCart,
  cart,
  setCART,
  count,
  handleShow,
  cartShow,
  homeShow
}) => {
  const { id } = useParams();
  const details = product.find((eachItem) => eachItem.id == id);
  console.log(details);

  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <div className="productInfoMainContainer">
      <header>
        <div className="flex shopping-card">
          <h1 className="shoppingCardHeading" onClick={homeShow}>
            Online Delivery App
          </h1>

          <div>
            <img
              className="cartImg"
              src={img1}
              onClick={cartShow}
            />
            <sup className="countHeading">{count}</sup>
          </div>
        </div>
      </header>

      <div className="productInfoContainer mt-3 pt-3">
        <div className="productInfoDetailsContainer">
          <h1>Product Details</h1>
          <img className="productInfoImg" src={details.url} />
          <div className="productInfoDivItems mt-2">
            <h1 className="productInfoCost">{`Cost : ₹${details.price}/-`}</h1>
            <h1 className="productInfoName">{`Name : ${details.name}`}</h1>
            <h1 className="productInfoCategory">{`Type : ${details.category}`}</h1>
            <h1 className="productInfoSeller">{`Seller : ${details.seller}`}</h1>
            <button
              onClick={() => addToCart(details)}
              className="btn btn-primary"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;

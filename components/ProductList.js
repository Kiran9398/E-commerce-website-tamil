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
  homeShow,
  cartShow,
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
          <Link className="shoppingCardHeadingLink" to="/">
            <h1 className="shoppingCardHeading" onClick={homeShow}>
              Online Shopping App
            </h1>
          </Link>

          <input
            className="headerInput"
            value={search}
            // onChange={(e) => setSearch(e.target.value)}
            onChange={onChangeHeaderInp}
            type="text"
            placeholder="Search your Products"
          />

          <div>
            <img className="cartImg" src={img1} onClick={cartShow} />
            <sup className="countHeading">{count}</sup>
            {/* <Link id="loginHeading" className="loginHeading" to="login-form">
              <span  className="loginHeading">Login</span>
            </Link> */}
            <button
              type="button"
              class="btn HeaderLoginBtn"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
            {/* modal code */}
            <div
              class="modal fade"
              id="loginModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Login
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <input
                        type="text"
                        name="username"
                        class="username form-control "
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        name="password"
                        class="password form-control mt-2"
                        placeholder="password"
                      />
                      {/* <a
                        class="login-trigger"
                        href="#"
                        data-target="#sighup"
                        data-toggle="modal"
                      >
                        if don't have account click here!
                      </a> */}
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

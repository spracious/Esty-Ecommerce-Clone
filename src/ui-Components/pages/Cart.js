import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { IoCloseSharp } from "react-icons/io5";
import Navbar from "../Navbar";
import Footer from "../Footer";
import coin from "../images/coin.webp";
import logo from "../images/coin logo.jpg";
import CartNav from "./subComponents/CartNav";

function Cart() {
  //   const { cart, grandTotal, increaseQty, decreaseQty, deleteCartItem } = useContext(DataContext);

  return (
    <div>
      <Navbar />
      <hr />
      <div className="cart1">
        <p>items in your cart</p>
        <p>Keep shopping</p>
      </div>

      <p>
        🤝🏼 Buy confidently with Esty's Purchase Protection program for buyers,
        get a full refund i the rare case your item doesn't arrive, damaged, or
        isn't as described. <p>See eligibility</p>
      </p>

      <div className="cart1">
        <div>
          <div>
            <p>
              <img src={logo} alt="" /> EnglishCoinCompany
            </p>
            <p>contact shop</p>
          </div>

          <div>
            <img src={coin} alt="" />
            <p>
              1947 farthing coin with a Wiren from the united kingdom, Perfect
              for birthdays, Anniversary and within Jewellery <br />
              <p>
                Save for later <p>X</p>
              </p>
            </p>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <p>
              USD 3.13 <br /> <p>(USD 313 each)</p>
            </p>

            <div>
              <p>
                {" "}
                This order is a gift <br />
                <p>Prices will not be shown on packing slip</p>
              </p>
              <p>Apply shop coupon codes</p>
            </div>

            <div>
              <textarea
                name=""
                id=""
                placeholder="Add a note to EnglishCoinCompany (optional)"
              ></textarea>

              <p>
                Shipping: USD 5.02 <br />
                <p>
                  EStimated delivery: <p>Feb 25-Mar 11</p> <br />{" "}
                  <p>from United Kingdom</p>
                </p>
              </p>

              <hr />
            </div>
          </div>
        </div>

        <div className="cart-payment">
          <p>How you'll pay</p>
          <div>
            <p>items(s) total</p>
            <p>Shipping</p>
            <p>
              To <p>Nigeria</p>
            </p>
          </div>

          <div>
            <p>USD </p>
            <p>USD 5.02</p>
          </div>

          <hr />

          <div>
            <p>Total(items)</p>
            <p>USD</p>
          </div>

          <button>Proceed to checkout</button>

          <p>Apply Etsy coupon code</p>
          <p>Local taxes included (where applcable)</p>
          <p>
            * Additional duties and taxes <p>may apply</p>
          </p>
        </div>
      </div>

      <CartNav />
    </div>
  );
}

export default Cart;

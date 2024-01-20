import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import mark from "../images/QuestionMark.PNG";
import home from "../images/home&dinning.webp";
import art from "../images/art.webp";
import craft from "../images/craft.webp";
import jwl from "../images/jwry.webp";
import bag from "../images/b&p.webp";
import wed from "../images/wedin.webp";
import elect from "../images/elect.webp";
import access from "../images/access.webp";
import statmnt from "../images/statement.webp";
import deer from "../images/deer.webp";
import rug from "../images/rug.webp";
import ring from "../images/handmade.webp";
import GrFavorite from "react-icons";
import short from "../images/shorts.webp";
import jeans from "../images/jeans.webp";
import doll from "../images/doll.webp";
import coin from "../images/coin.webp";
import { Link } from "react-router-dom";

function Vintage() {
  return (
    <div>
      <Navbar />
      <div className="vintage1">
        <div className="vintage1-A">
          <h1>Vintage</h1>
          <a href="">All</a>
          <p>
            {" "}
            (9,297,010 results, with Ads <img src={mark} alt="" />)
          </p>
        </div>

        <div className="vintage1-B">
          <div className="vintage1-B-images-title">
            <img src={home} alt="" />
            <p className="vintage1-B-title">Home & Living</p>
          </div>

          <div className="vintage1-B-images-title">
            <img src={art} alt="" />
            <p className="vintage1-B-title">Art & Collectibles</p>
          </div>

          <div className="vintage1-B-images-title">
            <img src={craft} alt="" />
            <p className="vintage1-B-title">
              Craft Supplies & <br /> Tools
            </p>
          </div>

          <div className="vintage1-B-images-title">
            <img src={jwl} alt="" />
            <p className="vintage1-B-title">Jewelry</p>
          </div>

          <div className="vintage1-B-images-title">
            <img src={bag} alt="" />
            <p className="vintage1-B-title">Bags & Purses</p>
          </div>

          <div className="vintage1-B-images-title">
            <img src={wed} alt="" />
            <p className="vintage1-B-title">Weddings</p>
          </div>

          <div className="vintage1-B-images-title">
            <img src={elect} alt="" />
            <p className="vintage1-B-title">
              Electronics & <br /> Accessories
            </p>
          </div>

          <div className="vintage1-B-images-title">
            <img src={access} alt="" />
            <p className="vintage1-B-title">Accessories</p>
          </div>
        </div>
      </div>

      <div className="vintage2">
        <h1 className="vintage2-A-text"> Find something you love</h1>

        <div className="vintage2-A-inputs">
          <input
            className="vintage2-A-input"
            type="text"
            readOnly
            placeholder="All Filters"
          />

          <select className="vintage2-A-select" name="" id="">
            <option value="">Sort by: Relevancy</option>
            <option value="">Relevancy</option>
            <option value="">Lowest Price</option>
            <option value="">Highest Price</option>
            <option value="">Top Customer Reviews</option>
            <option value="">Most Recent</option>
          </select>
        </div>
      </div>

      <div className="vintage3">
        <div className="vintage3-images">
          <div className="image">
            <img src={statmnt} alt="" />
          </div>
          <p className="vintage3-title">
            STATEMENT Antique Victorian Rose Cut Diamo...
          </p>
          <p className="vintage3-star">★ ★ ★ ★ ★(425)</p>
          <p className="vintage3-price">USD 2,585.43</p>
          <p className="vintage3-title">Ad by PrettyDifferentShop</p>
          <p className="vintage3-shipping">FREE shipping</p>
        </div>

        <div className="vintage3-images">
          <img src={deer} alt="" />
          <p className="vintage3-title">
            32178 Hetian jade hand-carved deer candlestick
          </p>
          <p className="vintage3-star">★ ★ ★ ★ ★(40)</p>
          <p className="vintage3-price">USD 2,280.00</p>
          <p className="vintage3-title">Ad by FancyDreamland</p>
        </div>

        <div className="vintage3-images">
          <img src={rug} alt="" />
          <p className="vintage3-title">
            Handmade Woven Turkish Wool Rug, Vintage R...
          </p>
          <p className="vintage3-price">USD 1,444.00</p>
          <p className="vintage3-title">Ad by AntiqueRugsHouse</p>
          <p className="vintage3-shipping">FREE shipping</p>
        </div>

        <div className="vintage3-images">
          <img src={ring} alt="" />
          <p className="vintage3-title">
            Native American Navajo Handmade Turquoise...
          </p>
          <p className="vintage3-star">★ ★ ★ ★ ★(899)</p>
          <p className="vintage3-price">USD 800.00</p>
          <p className="vintage3-title">Ad by IndiantreasuresGifts</p>
        </div>
      </div>

      <div className="vintage3">
        <div className="vintage3-images">
          <div className="image">
            <img src={short} alt="" />
          </div>
          <p className="vintage3-title">
            Vintage Hand Distresses All Sizes High Waisted...
          </p>
          <p className="vintage3-star">★ ★ ★ ★ ★(297) *️⃣ Star Seller</p>
          <p className="vintage3-price">
            USD 106.25{" "}
            <p>
              <strike className="slash">USD 125.00</strike> (15% off)
            </p>
          </p>
          <p className="vintage3-title">DenimForDays</p>
        </div>

        <div className="vintage3-images">
          <img src={jeans} alt="" />
          <p className="vintage3-title">
            LEVI'S HIGH WAIST Vintage Jeans Mediu...
          </p>
          <p className="vintage3-star">★ ★ ★ ★ ★(580)</p>
          <p className="vintage3-price">USD 95.00</p>
          <p className="vintage3-title">HeathersHandss</p>
        </div>

        <div className="vintage3-images">
          <img src={doll} alt="" />
          <p className="vintage3-title">
            It's Cold Goebel Hummel Figurine #421 Exclusiv...
          </p>
          <p className="vintage3-star">★ ★ ★ ★ ★(297) *️⃣ Star Seller</p>
          <p className="vintage3-price">USD 64.99</p>
          <p className="vintage3-title">Figurines2Collect</p>
          <p className="left">Only 1 left -- order soon</p>
        </div>

        <Link className="vintage3-images" to="/product">
          <img src={coin} alt="" />
          <p className="vintage3-title">
            1947 farthing Coin With a Wiren from the United...
          </p>
          <p className="vintage3-star">★ ★ ★ ★ ★ (2,931) </p>
          <p className="vintage3-price">USD 3.15</p>
          <p className="vintage3-title-line">EnglishCoinCompany</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Vintage;

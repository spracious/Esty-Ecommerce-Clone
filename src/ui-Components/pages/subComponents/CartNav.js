import www from "../../images/www.png";
import React from "react";

function CartNav() {
  return (
    <div>
      <p>Etsy offsets carbon emissions from every delivery</p>

      <hr />

      <div className="layer4">
        <div className="layer4-left-wing">
          <img src={www} alt="" />
          <p>Nigeria</p>
          <p>|</p>
          <p>English(US)</p>
          <p>|</p>
          <p>$</p>
          <p>(USD)</p>
        </div>
        <div className="layer4-right-wing">
          <p>© 2023 Etsy, Inc.</p>
          <a href="">Terms of Use</a>
          <a href="">Privacy</a>
          <a href="">Intrest-based ads</a>
          <a href="">Regions</a>
        </div>
      </div>

      <p>
        Merchant is Etsy, Inc. (USA) or Etsy Ireland UC(Ireland), depending on
        the currency in which the transacts. See{" "}
        <p>Etsy Payments Terms of Use</p>{" "}
      </p>

      <div>
        <p>Etsy, Inc., USA 117 Adams Street Brooklyn, NY 11201</p>
        <p>Etsy Ireland UC 66/67 Great Strand Street Dublin 1</p>
      </div>
    </div>
  );
}

export default CartNav;

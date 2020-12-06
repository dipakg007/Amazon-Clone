import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let _total = 0;
    basket.map((item) => (_total += item.price));
    setTotal(_total);
  }, [basket]);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>&#8377;{total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

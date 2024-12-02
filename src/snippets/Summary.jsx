import React from "react";
import "../style/summary.css";
import AllButtons from "../snippets/AllButtons";

function Summary(props) {
  return (
    <div className="summary-container">
      <h3>Summary</h3>
      <div className="summary-content">
        <div className="space-between">
          <p style={{ color: "#1F292D" }}>Subtotal</p>
          <p style={{ color: "#495F6A" }}>
            {props.subtotal ? "$" + props.subtotal + ".00" : "$400.00"}
          </p>
        </div>
        <div className="space-between">
          <p style={{ color: "#1F292D" }}>Shipping</p>
          <p style={{ color: "#495F6A" }}>Free</p>
        </div>
      </div>
      <div className="space-between summary-items-count">
        <p style={{ color: "#1F292D" }}>{props.items || "2"}</p>
        <button>Edit</button>
      </div>
      <div className="space-between">
        <p style={{ color: "#1F292D" }}>Total amount</p>
        <h4> {props.subtotal ? "$" + props.subtotal + ".00" : "$400.00"}</h4>
      </div>
      <AllButtons name="Continue Payment" class="summay-btn" />
    </div>
  );
}

export default Summary;

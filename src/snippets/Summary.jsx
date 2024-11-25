import React from 'react'
import "../style/summary.css"
import AllButtons from "../snippets/AllButtons";


function Summary() {
    return (
        <div className="summary-container">
            <h3>Summary</h3>
            <div className="summary-content">
                <div className="space-between">
                    <p style={{ color: "#1F292D" }}>Subtotal</p>
                    <p style={{ color: "#495F6A" }}>$320.00</p>
                </div>
                <div className="space-between">
                    <p style={{ color: "#1F292D" }}>Shipping</p>
                    <p style={{ color: "#495F6A" }}>Free</p>
                </div>
            </div>
            <div className="space-between summary-items-count">
                <p style={{ color: "#1F292D" }}>2 Item</p>
                <button>
                    Edit
                </button>
            </div>
            <div className="space-between">
                <p style={{ color: "#1F292D" }}>Total amount</p>
                <h4>$530.00</h4>
            </div>
            <AllButtons name="Continue Payment" class="summay-btn" />
        </div>
    )
}

export default Summary

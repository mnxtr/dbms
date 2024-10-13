import React, { useState } from "react";
import "./orders.css";
const OrderUpdateForm = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, maybe send to a server.
    console.log({ orderId, status, comments });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Order ID:</label>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button type="submit">Update Order</button>
    </form>
  );
};

export default OrderUpdateForm;

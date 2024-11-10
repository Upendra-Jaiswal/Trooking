import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PaymentStatusChecker({ transactionId }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3001/status?id=${transactionId}`
        );
        if (response.data.success) {
          navigate("/payment-success");
        } else {
          navigate("/payment-fail");
        }
      } catch (error) {
        console.error("Error checking payment status", error);
        navigate("/payment-fail");
      }
    };
    checkPaymentStatus();
  }, [transactionId, navigate]);

  return <div>Checking payment status...</div>;
}

export default PaymentStatusChecker;

import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img className="h-16 w-16" src="" alt="" />
        <div>
          <p>Product 1</p>
          <p>Giá</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">Completed</Button>
      </div>
    </Card>
  );
};

export default OrderCard;

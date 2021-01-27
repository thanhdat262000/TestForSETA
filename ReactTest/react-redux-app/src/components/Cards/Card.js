import React from "react";
import { Card } from "antd";
function CardUser({ title, body }) {
  return (
    <div>
      <Card title={title} style={{ width: 300 }}>
        <p>{body}</p>
      </Card>
    </div>
  );
}

export default CardUser;

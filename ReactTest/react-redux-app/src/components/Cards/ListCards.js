import React from "react";
import { List, Avatar } from "antd";
import { useSelector } from "react-redux";

function ListCards(props) {
  const data = useSelector((state) => state.postReducer.posts);
  return (
    <div className="list-cards">
      {" "}
      <div></div>
      <List
        pagination={true}
        itemLayout="horizontal"
        dataSource={data}
        loading={data ? false : true}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.body}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default ListCards;

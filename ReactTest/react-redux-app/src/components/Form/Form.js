import React from "react";
import { Form, Input, Button } from "antd";
import { postData } from "../../api";
import { toast, ToastContainer } from "react-toastify";
function PostForm(props) {
  const onFinish = async (values) => {
    const { data, status } = await postData(values);
    if (status === 201)
      toast.success("Create user successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    else
      toast.error("Oops! Can't create user", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  };
  return (
    <div className="post-form">
      <ToastContainer />
      <Form
        name="control-hooks"
        onFinish={onFinish}
        size="large"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <h1>Post form</h1>
        </Form.Item>
        <Form.Item
          label="UserID"
          name="userId"
          rules={[
            {
              required: true,
              message: "Enter userId",
            },
          ]}
        >
          <Input placeholder="UserId" />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Enter title",
            },
          ]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          label="Body"
          name="body"
          rules={[
            {
              required: true,
              message: "Enter body",
            },
          ]}
        >
          <Input placeholder="Body" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PostForm;

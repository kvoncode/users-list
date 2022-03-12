import { Table, Tag, Space, Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const UsersList = ({ users, setUsers }) => {
  return (
    <div>
      <Table columns={columns} dataSource={users} />;
    </div>
  );
};

// const myTable = (columns, data) => {return ()};

const AddForms = ({ users, setUsers }) => {
  const [form] = Form.useForm();

  useEffect(() => {});

  console.log("users:", users);

  const addExample = () => {
    const newId = users.length + 1;
    console.log("id", newId);
    const newRecord = {
      key: newId,
      name: "Oleg",
      age: 45,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    };

    console.log("crazy stuff", [users, newRecord]);

    setUsers([...users, newRecord]);

    console.log("finished");
  };

  const onFill = () => {
    form.setFieldsValue({
      username: "Jackie Chan",
      age: "67",
      address: "idk",
      tags: "knows kungfu",
    });
  };

  const addRecord = () => {
    // console.log(
    //   "field values",
    //   form.getFieldValue("username"),
    //   form.getFieldValue("age"),
    //   form.getFieldValue("address"),
    //   form.getFieldValue("tags")
    // );
    const newId = users.length + 1;
    const { username, age, address, tags } = form.getFieldsValue(true);

    const newRecord = {
      key: newId,
      name: username,
      age: age,
      address: address,
      tags: [tags],
    };

    setUsers([...users, newRecord]);
    console.log("fields", username, age, address, tags);

    // console.log("add fields", form.getFieldsValue(true));
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="addForms">
      <div className="formContainer">
        {" "}
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="username"
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input your age" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="address"
            name="address"
            rules={[{ required: true, message: "Please input your address" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tags"
            name="tags"
            rules={[{ required: true, message: "Please input your tags" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
      <div className="addButtons">
        <Button type="primary" onClick={addRecord}>
          Add
        </Button>
        <Button type="primary" onClick={addExample}>
          Add Example
        </Button>
        <Button type="primary" onClick={onFill}>
          Fill Fields
        </Button>
      </div>
    </div>
  );
};

export default function Home() {
  const [users, setUsers] = useState(data);

  return (
    <div className="outerDiv">
      <div className="list">
        <UsersList users={users} setUsers={setUsers}></UsersList>
      </div>

      <AddForms users={users} setUsers={setUsers}></AddForms>
    </div>
  );
}

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

  const addRecord = () => {
    console.log("added record");

  }

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
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            
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

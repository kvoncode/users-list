import { Table, Tag, Space, Button } from "antd";
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

let onAdd = () => {
  console.log("Add function not initialized yet!");
};

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
  onAdd = () => {
    console.log("add handler initialized");
    console.log(users.length);

    const newObj = {
      key: users.length + 1,
      name: "Oleg",
      age: 45,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    };

    setUsers(users.concat([newObj]));
    console.log(users);
  };

  return (
    <div>
      <Table columns={columns} dataSource={users} />;
    </div>
  );
};

// const myTable = (columns, data) => {return ()};

const AddForms = ({ users, setUsers }) => {
  console.log(users);
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

  return (
    <div className="addForms">
      <div>Forms</div>
      <div className="addButtons">
        <Button type="primary" onClick={() => {}}>
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

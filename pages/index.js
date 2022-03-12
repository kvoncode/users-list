import { Table, Tag, Space } from 'antd';
import React, { useEffect, useState } from "react";

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const onAdd = ( newObject) => {
  const newObj = {
    key: '4',
    name: 'Oleg',
    age: 45,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }

  console.log("Added")
  data.push(newObj)
  console.log(data)
  

}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
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
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
        <button onClick={onAdd} >Add</button>
      </Space>
    ),
  },
];

const UsersList = () => {

}

// const myTable = (columns, data) => {return ()};

export default function Home() {

  const [users, setUsers] = useState(data);

  return (
    <div className="outerDiv">
      <Table columns={columns} dataSource={users} />
    </div>
  )
}

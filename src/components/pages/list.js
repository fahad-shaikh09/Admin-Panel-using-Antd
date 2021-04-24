import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Typography } from "antd";
import { useHistory } from "react-router";
import axios from "axios";
const { Title } = Typography;

const List = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/users`).then((res) => {
      setAllData(res.data);
    });
  }, []);

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
  ];

  const data = [{}];
  
  allData.map((user) => {
    data.push({
      key: user.id,
      username: user.username,
      email: user.email,
      gender: user.gender,
    });
    return data;
  });


  const addNewUser = () => {
    history.push("/form");
  };


  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Title level={2}>Users List</Title>
        </Col>
        <Col span={6}>
          <Button onClick={addNewUser} block>
            Add User
          </Button>
        </Col>
      </Row>

      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 6 }}/>
        </Col>
      </Row>
    </div>
  );
};
export default List;

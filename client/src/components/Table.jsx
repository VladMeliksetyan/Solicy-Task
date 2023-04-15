import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import fetchData from "../helpers/api";
import { columns } from "../helpers/columns";

/**
 * display all users
 * @returns {component}
 */

const UsersTable = () => {
  const navigate = useNavigate();
  //  keep all users data
  const [data, setData] = useState([]);
  // get data from backend
  useEffect(() => {
    (async () => {
      const { data } = await fetchData("get", "");
      setData(data);
    })();
  }, []);

  return (
    <Table
      dataSource={data}
      columns={columns}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            navigate(`/${record.id}`);
          },
        };
      }}
    />
  );
};
export default UsersTable;

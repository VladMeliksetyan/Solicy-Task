export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    fixed: "left",
    width: 50,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Created On",
    dataIndex: "createdOn",
    key: "createdon",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, record) => <a>{text}</a>,
  },
];

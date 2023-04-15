const UserData = [
  {
    id: 1,
    name: "Alice",
    createdOn: new Date().toLocaleString(),
    owner: "Bob",
    action: "view",
    key: "1",
  },
  {
    id: 2,
    key: "2",
    name: "Bob",
    createdOn: new Date().toLocaleString(),
    owner: "Charlie",
    action: "view",
  },
  {
    id: 3,
    name: "Charlie",
    key: "3",
    createdOn: new Date().toLocaleString(),
    owner: "David",
    action: "view",
  },
  {
    id: 4,
    name: "David",
    createdOn: new Date().toLocaleString(),
    owner: "Alice",
    action: "view",
    key: "4",
  },
];

module.exports = UserData;

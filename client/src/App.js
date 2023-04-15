import { Routes, Route } from "react-router-dom";
import UsersTable from "./components/Table";
import User from "./components/UserTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersTable />} />
      <Route path=":id" element={<User />} />
    </Routes>
  );
}

export default App;

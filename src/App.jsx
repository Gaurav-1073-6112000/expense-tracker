import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  Home,
  Layout,
  Login,
  Register,
  Income,
  DashBoard,
  Expense,
  LeaderBoard,
} from "./pages";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

const App = () => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo.username);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/income"
            element={userInfo ? <Income /> : <h1>Login to continue</h1>}
          />
          <Route
            path="/expense"
            element={userInfo ? <Expense /> : <h1>Login to continue</h1>}
          />
          <Route
            path="/dashboard"
            element={userInfo ? <DashBoard /> : <h1>Login to continue</h1>}
          />
          <Route
            path="/leader"
            element={userInfo ? <LeaderBoard /> : <h1>Login to continue</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

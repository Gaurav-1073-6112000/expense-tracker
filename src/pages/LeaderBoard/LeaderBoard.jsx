import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import Profiles from "./profiles";
import { BsPeopleFill } from "react-icons/bs";
import "./LeaderBoard.scss";
import { api } from "../../config/api";

const LeaderBoard = ({}) => {
  const [data, setData] = useState({});
  const [friends, setFriends] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { incomes, expenses, userInfo } = useContext(UserContext);
  console.log(userInfo);
  console.log(incomes);

  const total = (money) =>
    money
      .map((item) => item.amount)
      .reduce((partialSum, amount) => partialSum + amount, 0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get("/api/v1/login/score");
        console.log(result);
        setData(result.data.data);
        const currentUser = result.data.data.find(
          (item) => item._id == userInfo.id
        );
        setFilteredData([...filteredData, currentUser]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const addFriends = data.find((item) => item.username == friends);
    const filteredDataUsernames = filteredData.map((item) => item.username);
    if (!filteredDataUsernames.includes(addFriends.username)) {
      const newArray = filteredData.length
        ? [...filteredData, addFriends]
        : [addFriends];
      setFilteredData(newArray);
    } else {
      setFilteredData(filteredData);
    }
  };

  const handleUpdate = async () => {
    try {
      const result = await api.put("/api/v1/login/score", {
        score: total(incomes) - total(expenses),
        id: userInfo.id,
      });
      console.log(total(incomes) - total(expenses));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);
  return (
    <div className="board">
      <h1 className="leaderboard">Leaderboard</h1>
      <div className="app__add-player">
        <button onClick={handleUpdate}>Update Score</button>
      </div>
      {data.length ? (
        <Profiles data={data.sort((a, b) => b.score - a.score)} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LeaderBoard;

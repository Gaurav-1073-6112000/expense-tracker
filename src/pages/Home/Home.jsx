import { Link } from "react-router-dom";
import { images } from "../../constants";

import "./Home.scss";

const info = [
  {
    imgUrl: images.scrum4,
    title: "Dashboard for Overview and Visualization",
    desc: "Develop components for users to input and track their income and expenses. Implement forms for adding new income and expense entries with fields for amount, category, date, etc.",
  },
  {
    imgUrl: images.scrum3,
    title: "Income and Expense Tracking",
    desc: "Develop components for users to input and track their income and expenses. Implement forms for adding new income and expense entries with fields for amount, category, date, etc.",
  },
  {
    imgUrl: images.scrum2,
    title: "Leaderboards",
    desc: "Implement a leaderboard component to showcase users' achievements and rankings based on their financial activities. Define criteria for leaderboard rankings, such as highest savings rate, lowest expense-to-income ratio, etc.",
  },
];

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-container">
        <div className="app__home-hero">
          <div className="app__home-img">
            <img src={images.scrum1} alt="headerImage" />
          </div>
          <div className="app__home-text">
            <h1> Expense Tracker Application</h1>
            <p>
              Welcome to our Expense Tracker application! Our platform is
              designed to empower users in managing their finances effectively
              and efficiently. Whether you're an individual looking to keep a
              closer eye on your personal expenses or a business owner seeking
              to streamline financial tracking processes, our application offers
              a comprehensive suite of features to meet your needs.
            </p>
          </div>
        </div>

        <div className="app__home-about">
          <h1 className="app__home-title">Features</h1>

          {/* 1 */}
          <div>
            <div className="app__home-text">
              <h1>{info[0].title}</h1>
              <p>{info[0].desc}</p>
            </div>
            <div className="app__home-img">
              <img src={info[0].imgUrl} alt="headerImage" />
            </div>
          </div>
          {/* 2 */}
          <div>
            <div className="app__home-img">
              <img src={info[1].imgUrl} alt="headerImage" />
            </div>
            <div className="app__home-text">
              <h1>{info[1].title}</h1>
              <p>{info[1].desc}</p>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="app__home-text">
              <h1>{info[2].title}</h1>
              <p>{info[2].desc}</p>
            </div>
            <div className="app__home-img">
              <img src={info[2].imgUrl} alt="headerImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";

const Card = () => {
  const [randomUser, setRandomUser] = useState();

  const userData = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setRandomUser(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="card-container">
      {randomUser?.map((user, index) => (
        <div>
          <div key={index} className="card-box">
            <div className="card-header">
              <img
                src={user.picture.medium}
                alt="users profile"
                className="photo"
              />
              <p className="username">
                {user.name.title} {user.name.first} {user.name.last}
              </p>
            </div>
            <img src={email} alt="logo" className="logo" />
            <p className="email">{user.email}</p>
            <img src={phone} alt="logo" className="logo" />
            <p className="phone">{user.phone}</p>
            <img src={location} alt="logo" className="logo" />
            <p className="location">
              {user.location.city} {user.location.country}
            </p>
            <div className="extrainfo">
              <p>
                {"Age: "}
                {user.dob.age}
              </p>
              <p>
                {"Register Date: "}
                {user.registered.date.substr(0, 10)}
              </p>
            </div>
          </div>
          <button onClick={userData}>Random User</button>
        </div>
      ))}
    </div>
  );
};
export default Card;

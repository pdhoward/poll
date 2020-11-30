import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

function Gallery() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= users.length) {
      userIndex = 0;
    }
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = users.length - 1;
    }
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }
  function randomUser(userIndex) {    
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }
  function handleRandom() {
    const newUserIndex = Math.floor(Math.random() * users.length);
    randomUser(newUserIndex)
  }

  function loadUsers() {
    API.fetchUsers()
      .then(users => {
        setUsers(users);
        setUser(users[0]);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h3 className="text-center">Rising Software Engineers</h3>
      <h5 className="text-center h5">Click arrow to browse, button for random</h5>
      <Row>
        <CardContainer
          title={user.login}
          image={user.image}
          profileUrl={user.profileUrl}
          handleBtnClick={handleBtnClick}
          handleRandom={handleRandom}
        />       
      </Row>
    </div>
  );
}

export default Gallery;

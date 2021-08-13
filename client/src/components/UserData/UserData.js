import { useEffect, useState } from "react";
import "./UserData.css";

const UserData = () => {
  const [userData, setUerData] = useState([]);

  const fetchUserData = async () => {
    try {
      let res = await fetch("/user");
      let response = await res.json();
      let users = response.userDetails || [];
      setUerData(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      fetchUserData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div className="table-wrapper">
        <table className="table table-bordered table-striped table-hover shadow">
          <thead>
            <tr>
              <th>Row</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;

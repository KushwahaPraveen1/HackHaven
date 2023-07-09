import axios from "axios";
import React, { useEffect, useState } from "react";

const UsingAxios = () => {
  const [sponsors, setSponsors] = useState([]);



  useEffect(() => {
    const fetchData = () => {
      axios.get("https://sponsure.onrender.com/listsponsors")
      .then(response => {
        setSponsors(response.data);
       });
    };
  }, []);
  console.log(sponsors);
  return (
    <div>
      {sponsors.length > 0 && (
        <ul>
          {sponsors.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsingAxios;

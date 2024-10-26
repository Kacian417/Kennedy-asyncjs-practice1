/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const url = "https://hp-api.herokuapp.com/api/characters/students";
  const fetchData = async () => {
    const response = await fetch(`${url}actor`);
    if (!response.ok) {
      console.log("error: ", response.status);
    }
    console.log(response);
    const data = await response.json();
    console.log(data.actor);
  };

  fetchData();
  // //async / await
  // async function fetchData() {
  //   const response = await fetch(`${url}peoples`);
  //   if (response.ok) {
  //     let data = await response.json();
  //     console.log(data.results);
  //   } else {
  //     console.log("Aw snap!");
  //   }
  // }
  // fetchData();
  //
  //
  //
  //
  //
  //
  // fetch(`${url}people`)
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error(res.statusText);
  //     } else {
  //       console.log(res);
  //       return res.json();
  //     }
  //   })
  //   .then(data => console.log(data.results))
  //   .catch(error => console.log("aw snap!", error));
};

import React, { Component } from "react";
import "./style.css";
import Search from "../Search";

const employees = [
  {
    image: "https://www.factinate.com/wp-content/uploads/2018/08/325117.jpg",
    name: "Eddard Stark",
    house: "Stark",
    pob: "Winterfell",
    status: "Beheading"
  },
  {
    image:
      "https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans%2B%2BkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg",
    name: "Daeneryes Targaryen",
    house: "Targaryen",
    pob: "Dragonstone",
    status: "Poor Writing"
  },
  {
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/15/09/jon-snow.jpg?w968h681",
    name: "Jon Snow",
    house: "Targaryen",
    pob: "Winterfell",
    status: "ALIVE!"
  },
  {
    image:
      "https://i.insider.com/59a5dd9cb065da49008b4878?width=1100&format=jpeg&auto=webp",
    name: "Tyrion Lannister",
    house: "Lannister",
    pob: "Casterly Rock",
    status: "ALIVE!"
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/2/25/Joffrey_Season_4_Episode_2_TLATR.jpg/revision/latest/top-crop/width/720/height/900?cb=20190418203833",
    name: "Joffery Baratheon",
    house: "Baratheon/Lannister",
    pob: "Kings Landing",
    status: "Poisined at Purple Wedding"
  },
  {
    image:
      "https://snworksceo.imgix.net/car/669b7918-e5d5-476e-93cc-8997a085ebb1.sized-1000x1000.jpg?w=1000",
    name: "Theon Greyjoy",
    house: "Greyjoy",
    pob: "Kings Landing",
    status: "Stabbed by Night King"
  },
  {
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/10/Margaery-Tyrell-Game-Of-Thrones.jpeg",
    name: "Margaery Tyrell",
    house: "Tyrell",
    pob: "High Garden",
    status: "Wild Fire"
  }
];

export class EmployeeTable extends Component {
  state = {
    employees: employees,
    search: "",
    sortOrder: ""
  };

  handleInputChange = event => {
    if (event.target.name === "search") {
      const searchName = event.target.value.toLowerCase();
      console.log(searchName);

      const newName = this.state.employees.filter(item => {
        return item.name.toLowerCase().includes(searchName);
      });
      console.log(newName);

      this.setState({
        [event.target.name]: event.target.value,
        employees: newName
      });
    }
  };

  sortByName = () => {
    console.log("click");
    let sortedEmployees = this.state.employees.sort((a, b) => {
      if (b.name > a.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }

    console.log(sortedEmployees);
    this.setState({ employees: sortedEmployees });
  };

  render() {
    return (
      <>
        <input
          type="text"
          id="searchBox"
          name="search"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleInputChange}
        />
        <table>
          <tr>
            <th></th>
            <th>
              Name<button onClick={this.sortByName}>Sort</button>
            </th>
            <th>House</th>
            <th>Place of Birth</th>
            <th>Death</th>
          </tr>
          {this.state.employees.map(person => (
              <>
              <br />
            <tr>
              <td>
                <img src={person.image} />
              </td>
              <td>{person.name}</td>
              <td>{person.house}</td>
              <td>{person.pob}</td>
              <td>{person.status}</td>
            </tr>
            </>
          ))}
        </table>
      </>
    );
  }
}

export default EmployeeTable;

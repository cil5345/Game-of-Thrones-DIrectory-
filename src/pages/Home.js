
// import React, {Component} from "react";
// import {Search, Button} from "../components/Search";
// import EmployeeTable from "../components/EmployeeTable";


// export class Home extends Component{
//     constructor() {
//         super(); 
//         this.state ={
//             employees: [
//                 {
//                     image: "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
//                     name: "Chris",
//                     phone: "215 555 2222",
//                     email: "Chris@chris.com",
//                     dob: "10/12/1993"
//                 },
//                 {
//                     image: "",
//                     name: "Chris",
//                     phone: "215 555 2222",
//                     email: "Chris@chris.com",
//                     dob: "10/12/1993"
//                 },
//                 {
//                     image: "",
//                     name: "Chris",
//                     phone: "215 555 2222",
//                     email: "Chris@chris.com",
//                     dob: "10/12/1993"
//                 },
//                 {
//                     image: "",
//                     name: "Chris",
//                     phone: "215 555 2222",
//                     email: "Chris@chris.com",
//                     dob: "10/12/1993"
//                 },
//             ],
//             search: ""
//         }
//     }

//     _handleChange = e =>{
//         const {name, value } = e.target;
//         this.setState({
//             [name]:value,
            
//         })

//     }


//     render() {
//         return(
//             <>
//             <Search 
//             name="search"
//             value={this.state.search}
//             onChange={(e)=>this._handleChange(e)}
//             />
//             <Button text="Search Button"/>
//             <br />
//             <br />
//             <EmployeeTable employees={this.state.employees} />
//             </>
//         )
//     }

// }

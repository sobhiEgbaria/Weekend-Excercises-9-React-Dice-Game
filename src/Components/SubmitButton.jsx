// import React, { Component } from "react";
// import Parent from "./Parent";

// class SubmitButton extends Component {
//   state = {
//     targetScore: 100,
//   };
//   // submit the target value => default = 100
//   handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   //change the text input to new target value
//   handleSelectChange = (e) => {
//     this.setState((prevState) => {
//       return { targetScore: e.target.value };
//     });
//   };

//   render() {
//     return (
//       <>
//         <form id={Math.random()} onSubmit={this.handleSubmit}>
//           <input
//             placeholder="default target is 100"
//             type="text"
//             onChange={this.handleSelectChange}
//           />
//           <button>Submit</button>
//         </form>
//       </>
//     );
//   }
// }

// export default SubmitButton;

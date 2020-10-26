// import React from "react";
// import { Link, useParams, useHistory } from "react-router-dom";

// const userList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

// export const Users = (props) => {
//   const { id } = useParams();
//   const history = useHistory();


//   const handleClick = () => {
//       history.push('/');

//   }
//   return (
//     <div>
//         <button type="button" onClick={handleClick}>Go Home</button>
//         {/* img src="logo" */}
//       <h2>Users Page {id}</h2>
//       {/* <h2>Users Page {props.match.params.id}</h2> */} 

//       <ul>
//         {userList.map((user) => (
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}>User {user.id}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

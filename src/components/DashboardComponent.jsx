import { useState, useEffect } from "react";
import UserComponent from "./UserComponent";
import UserDetailComponent from "./UserDetailComponent";

function DashboardComponent() {

    const[ selectedUser, setSelectedUser] = useState(null);
    const [ userList, setuserList] = useState([]);
   
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users") // Fake API call
            .then((response) => response.json())
            .then((data) => setuserList(data)); // Store the user data
    }, []); // Empty [] means run only once


    return (
        <>
            {
                userList.map(
                    (usr) => <UserComponent user={usr} onUserClick={() => setSelectedUser(usr)}/>
                )
                
            }

            {
                (selectedUser &&  < UserDetailComponent selectedUser={selectedUser}/>)
            }

        </>
    );
}

export default DashboardComponent;

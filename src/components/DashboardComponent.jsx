import UserComponent from "./UserComponent";

function DashboardComponent() {
   
    const user = { "name": "ankur", "profession": "engineer" };
    const user2 = { "name": "ambar", "profession": "engineer-2" };
    const user3 = { "name": "arav", "profession": "engineer-3" };

    const userList = [];
    userList.push(user);
    userList.push(user2);
    userList.push(user3);

    return (
        <>
            {
                userList.map(
                    (usr) => <UserComponent user={usr}/>
                )
            }

        </>
    );
}

export default DashboardComponent;

function UserDetailComponent({selectedUser}) {

    return (

        <>
            <div>Selected User : {selectedUser.name} | {selectedUser.email} </div>
            
        </>
    );
}

export default UserDetailComponent;
import React from 'react';

function UserComponent({ user, onUserClick }) {



    // const viewUserDetail = (userId) =>  {
    //     console.log('view called for ' +  userId)
        
    // }


    const updateDetail = () => {
        console.log('update called')
    }

    const deleteDetail = () => {
        console.log('delete called')
    }

    return (
        <>
            <div>
                name : {user.name}  -- <button onClick={onUserClick}>view</button> -- <button onClick={updateDetail}>edit</button> -- <button onClick={deleteDetail}>delete</button>
                <br></br>
            </div>

        </>
    );
}

export default UserComponent;
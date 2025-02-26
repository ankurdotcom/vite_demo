import React from 'react';

function UserComponent({user}) {

    return (
        <>
            <div>
                name : {user.name}  -- <button onClick={() => console.log('view called')}>view</button> -- <button>edit</button> -- <button>delete</button>
                <br></br>
            </div>

        </>
    );
}

export default UserComponent;
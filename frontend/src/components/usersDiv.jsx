import React from 'react';
import User from './user';
import Users from './users';

 function createUser(userD) {
    return (
      <User
        key={userD.key} 
        name={userD.name}
        email={userD.email} />
    );
  }
  
function usersDiv() {
    return (
        <div className='usersDiv'>
            <h2>Users</h2>
              {Users.map(createUser)}
        </div>
    );
}

export default usersDiv;

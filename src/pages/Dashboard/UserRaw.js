import React from 'react';
import {toast} from 'react-toastify'

const UserRaw = ({user,index}) => {
    const {email, role} = user;
    
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data =>{ 
            toast('Successfully made an admin')
            console.log(data)
        })
    }
    return (
        
            <tr>
              <th>{index + 1}</th>
              <td>{user.email}</td>
              <td>{role !=='admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
              <td><button className="btn btn-xs bg-red-600 text-white">X</button></td>
              
            </tr>
        
    );
};

export default UserRaw;
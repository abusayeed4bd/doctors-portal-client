import React from 'react';
import {toast} from 'react-toastify'

const UserRaw = ({user,index, refetch}) => {
    const {email, role} = user;
    
    const makeAdmin = () =>{
        fetch(`https://salty-oasis-22278.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> {
            if(res.status === 403){
                toast.error('field to make admin')
            }
            return res.json()})
        .then(data =>{ 
            if(data.modifiedCount > 0){
                toast.success('Successfully made an admin')
            refetch();
            }
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
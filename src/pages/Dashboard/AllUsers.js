
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRaw from './UserRaw';

const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://salty-oasis-22278.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    
  return (
    <div>
      <h2 className="text-5xl text-primary">All Users :{users.length}</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>email</th>
            <th>Make Admin</th>
            <th>Remove User</th>
           
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => <UserRaw user={user} index={index} key={user._id} refetch={refetch}></UserRaw> )
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

import endPoints from 'services/api';
import useFetch from 'hooks/useFetch';
import { useAuth } from 'hooks/useAuth';
import AuthData from 'common/interfaces/AuthData.interface';


export default function Staking() {
  const auth: AuthData = useAuth();
  const users = useFetch(endPoints.users.getUsers);

  return (
    <>
      <h2 className="text-2xl font-bold text-zinc-900 capitalize">Users Info</h2>
      <table className="border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">Name</th>
            <th className="border border-slate-600 ...">Email</th>
            <th className="border border-slate-600 ...">Phone</th>
            <th className="border border-slate-600 ...">Address</th>
            <th className="border border-slate-600 ...">City</th>
            <th className="border border-slate-600 ...">Country</th>
            <th className="border border-slate-600 ...">Wallet Address</th>
            <th className="border border-slate-600 ...">Wallet Address</th>
            
          </tr>
        </thead>
        <tbody>
          {  users.map((user) => (
            <tr>
              <td className="border border-slate-700 ...">{user.name}</td>
              <td className="border border-slate-700 ...">{user.email}</td>
              <td className="border border-slate-700 ...">{user.phone}</td>
              <td className="border border-slate-700 ...">{user.address}</td>
              <td className="border border-slate-700 ...">{user.city}</td>
              <td className="border border-slate-700 ...">{user.country}</td>
              <td className="border border-slate-700 ...">{user.walletAddress}</td>
              <td className="border border-slate-700 ...">{  user.role}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

'use client';
import { customers } from './data';
import Link from 'next/link';
import { Badge } from '@/ui/badge';
export default function CustomerListPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Customer Management</h1>
        <button className="border px-4 py-2 rounded text-sm hover:bg-gray-100">Export list</button>
      </div>
      <div className="rounded-lg shadow border">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-50 border-b text-left">
            <tr>
              <th className="p-4">Customer details</th>
              <th>Customer ID</th>
              <th>Joined On</th>
              <th>Business Name</th>
              <th>User Status</th>
              <th>Current Plan</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4">
                  <Link href={`/customers/${user.id}`} className="flex flex-col">
                    <span className="font-medium">{user.fullName}</span>
                    <span className="text-xs text-gray-500">{user.email} | {user.phone}</span>
                  </Link>
                </td>
                <td>{user.id}</td>
                <td>{user.joinedDate}</td>
                <td>{user.businessName}</td>
                <td>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${user.userstatus === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {user.userstatus}
                  </span>
                </td>
                <td>
                  <Badge>{user.currentPlan}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 text-sm">
        <span className="mr-2">1</span>
        <span className="mr-2 text-gray-400">2</span>
        <span className="text-gray-400">...</span>
      </div>
    </div>
  );
}

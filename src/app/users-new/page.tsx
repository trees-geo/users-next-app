"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded shadow">
            <div className="font-semibold">{user.name}</div>
            <div className="text-gray-600">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
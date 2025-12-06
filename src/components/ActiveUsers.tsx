import React from 'react';
import { Card } from './Card';
import type { User } from '../utils/data';

interface ActiveUsersProps {
  users: User[];
}

export const ActiveUsers: React.FC<ActiveUsersProps> = ({ users }) => {
  return (
    <Card title="Most Active Users">
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <img
                className="w-8 h-8 rounded-full flex-shrink-0"
                src={user.avatar}
                alt={user.name}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate" title={user.email}>
                  {user.email}
                </p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-medium text-gray-900">{user.orders} orders</p>
              <p className="text-xs text-gray-500">
                ${user.totalSpent.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
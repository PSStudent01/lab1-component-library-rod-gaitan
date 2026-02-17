
import React from 'react';
import type { UserProfileCardProps } from '../../types';  //importing this interface from index.ts

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,

}) => {
    return (
        <div className="border rounded-lg p-6 bg-white shadow-md">

            <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-2xl text-gray-600">
                        {user.name.charAt(0).toUpperCase()}
                    </span>
                </div>

                <div>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                </div>
            </div>
                <p className="text-gray-600 mb-2">{user.email}</p>
                <p className="text-gray-500 text-sm">{user.role}</p>
        </div>
    )
};






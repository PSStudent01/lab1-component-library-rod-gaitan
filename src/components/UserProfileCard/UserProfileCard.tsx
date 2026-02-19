
import React from 'react';
import type { UserProfileCardProps } from '../../types';  //importing this interface from index.ts

/*
This component displays the user's profile information in a card format. It shows 
-an avatar 
-user's name
-user's email
-user's role

- Example usage:
- <UserProfileCard user={user} />

Special handling:
-avatarUrl is optional
-avatar defaults to first letter of name

*/

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
}) => {
    return (
        // Card container using Tailwind with the following properties:
        <div className="border rounded-lg p-6 bg-white shadow-md">
            {/* the following 6 lines positions and styles the avatar accoridng to the Tailwind properties*/}
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-2xl text-gray-600">
                        {user.name.charAt(0).toUpperCase()}
                    </span>
                </div>

                {/* the following styles the user name*/}
                <div>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                </div>
            </div>
                {/* the following styles the email and use role*/}
                <p className="text-gray-600 mb-2">{user.email}</p>
                <p className="text-gray-500 text-sm">{user.role}</p>
             
        </div>
    )
};






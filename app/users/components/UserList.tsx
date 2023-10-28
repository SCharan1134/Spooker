"use client";

import { User } from "@prisma/client";

import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r-2
        border-b-2
        border-t-2
        border-stone-800
        block w-full left-0
      "
    >
      <div className="">
        <div className="flex justify-between mb-4 pt-4 pb-5 bg-stone-700 ">
          <div
            className="
              px-4 text-2xl font-bold text-stone-400
            "
          >
            People
          </div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;

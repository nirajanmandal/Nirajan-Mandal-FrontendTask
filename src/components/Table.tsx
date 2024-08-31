"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import { useCallback } from "react";

export const socialMedia = [
  {
    id: 1,
    name: "instagram",
    users: "125k",
    date: "Today, 16:36",
    avatar: "/instagram.png",
  },
  {
    id: 2,
    name: "twitter",
    users: "100K",
    date: "23 Jun, 13:06",
    avatar: "/twitter.png",
  },
  {
    id: 3,
    name: "facebook",
    users: "110K",
    date: "21 Jun, 19:04",
    avatar: "/facebook.png",
  },
];

const columns = [
  { name: "NAME", uid: "name" },
  { name: "STATUS", uid: "status" },
];

type User = (typeof socialMedia)[0];

export default function TableComponent() {
  const renderCell = useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex gap-x-3">
            <div className="p-3 bg-[#F6F7FE] rounded-full w-fit">
              <Image
                src={user.avatar}
                alt={user.name}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <p className="capitalize text-lg text-[#1B2559] font-semibold">
                {user.name}
              </p>
              <p className="text-muted-foreground font-semibold text-lg">
                {user.date}
              </p>
            </div>
          </div>
        );
      case "status":
        return <p className="text-[#1B2559] font-bold">{user.users}</p>;
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table removeWrapper hideHeader>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody
        items={socialMedia}
        className="flex items-center justify-between"
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

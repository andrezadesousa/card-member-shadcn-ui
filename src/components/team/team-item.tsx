"use client";

import { Member } from "@/types/member";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { TeamCombobox } from "./team-combobox";
import { useState } from "react";

type Props = {
  data: Member;
};
export const TeamItem = ({ data }: Props) => {
  const [role, setRole] = useState(data.role);
  return (
    <div className="flex gap-4 items-center">
      <div>
        <Avatar>
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback>{data.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 overflow-x-hidden">
        <div className="truncate">{data.name}</div>
        <div className="text-muted-foreground truncate text-sm">
          {data.email}
        </div>
      </div>
      <div>
        <TeamCombobox value={role} setValue={setRole} />
      </div>
    </div>
  );
};

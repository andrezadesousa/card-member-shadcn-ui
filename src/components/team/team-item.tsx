import { Member } from "@/types/member";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

type Props = {
  data: Member;
};
export const TeamItem = ({ data }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <Avatar>
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback>{data.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1">
        <div>{data.name}</div>
        <div className="text-muted-foreground text-sm">{data.email}</div>
      </div>
    </div>
  );
};

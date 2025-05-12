import { members } from "@/data/members";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TeamItem } from "./team-item";

export const TeamArea = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Member</CardTitle>
        <CardDescription>
          Invite your team members to collaborate
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {members.map((member) => (
          <TeamItem key={member.id} data={member} />
        ))}
      </CardContent>
    </Card>
  );
};

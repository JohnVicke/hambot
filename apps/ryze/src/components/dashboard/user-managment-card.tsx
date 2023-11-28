import { api } from "~/trpc/server";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { CopyInviteLink } from "./copy-invite-link";

export async function UserManagmentCard() {
  const users = await api.auth.users.query();
  console.log({ users });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create invite link</CardTitle>
        <CardDescription>
          Only people with the link can join your this workspace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CopyInviteLink />
        <Separator className="my-4" />
        <h4 className="text-sm font-medium">Members</h4>
        {users.map((user) => (
          <div
            style={{ backgroundColor: user.bannerColor ?? "" }}
            className="flex items-center space-x-4"
            key={user.id}
          >
            <Avatar>
              {user.image && <AvatarImage src={user.image} />}
              <AvatarFallback>{user.name?.[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p>{user.email}</p>
              <p>{user.name}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

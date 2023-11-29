import { ShieldCheck } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
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

export async function UserManagmentCard(props: { className?: string }) {
  const users = await api.auth.users.query();

  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>Create invite link</CardTitle>
        <CardDescription>
          Only people with the link can join your this workspace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CopyInviteLink />
        <Separator className="my-4" />
        <h4 className="mb-2 text-sm font-medium">Dashboard access</h4>
        {users.map((user) => (
          <div
            style={{ backgroundColor: user.bannerColor ?? "" }}
            className="flex items-center justify-between space-x-2"
            key={user.id}
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                {user.image && <AvatarImage src={user.image} />}
                <AvatarFallback>{user.name?.[0]}</AvatarFallback>
              </Avatar>
              <p className="flex flex-col">
                {user.email} <span className="font-medium">{user.name}</span>
              </p>
            </div>
            {user.role === "admin" && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ShieldCheck className="h-6 w-6 shrink-0" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Admin</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

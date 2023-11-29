import { CommandsRanCard } from "~/components/dashboard/hambot-api-overview/commands-ran-card";
import { UserManagmentCard } from "~/components/dashboard/user-managment-card";

export default function Page() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <CommandsRanCard className="col-span-4" />
      <UserManagmentCard className="col-span-2" />
    </div>
  );
}

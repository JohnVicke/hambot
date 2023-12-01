import { CommandsRanCard } from "./_components/hambot-api-overview/commands-ran-card";
import { RefreshCommandsCard } from "./_components/refresh-commands-card";
import { UserManagmentCard } from "./_components/user-managment-card";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
      <CommandsRanCard className="col-span-full lg:col-span-4" />
      <UserManagmentCard className="col-span-full lg:col-span-2" />
      <RefreshCommandsCard className="col-span-full lg:col-span-2" />
    </div>
  );
}

import { CommandsRanCard } from "./_components/hambot-api-overview/commands-ran-card";
import { RefreshCommandsCard } from "./_components/refresh-commands-card";
import { UserManagmentCard } from "./_components/user-managment-card";
import { WinLossCard } from "./_components/win-loss-card";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-8">
      <div className="col-span-full flex flex-col gap-4 lg:col-span-6">
        <WinLossCard />
        <CommandsRanCard />
      </div>
      <div className="col-span-full flex flex-col gap-4 lg:col-span-2">
        <UserManagmentCard />
        <RefreshCommandsCard />
      </div>
    </div>
  );
}

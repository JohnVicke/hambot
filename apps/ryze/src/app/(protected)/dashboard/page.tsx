import { CommandsRanCard } from "./_components/hambot-api-overview/commands-ran-card";
import { UserManagmentCard } from "./_components/user-managment-card";

export default function Page() {
  return (
    <div className="grid grid-cols-6 gap-4">
      <CommandsRanCard className="col-span-4" />
      <UserManagmentCard className="col-span-2" />
    </div>
  );
}

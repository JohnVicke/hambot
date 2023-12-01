import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { RefreshButton } from "./refresh-button";

export async function RefreshCommandsCard(props: { className?: string }) {
  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>Refresh discord bot commands</CardTitle>
        <CardDescription>
          Sometimes the bot commands get out of sync with the database. This
          will refresh the commands.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RefreshButton />
      </CardContent>
    </Card>
  );
}

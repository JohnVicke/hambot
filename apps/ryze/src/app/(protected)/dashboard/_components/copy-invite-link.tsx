"use client";

import { Check, Copy, Wrench } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

export function CopyInviteLink() {
  const { copy, copied } = useCopyToClipboard();
  const mutation = api.auth.inviteLink.useMutation();

  const copyOrGenerate = () => {
    if (!mutation.data) {
      mutation.mutate();
      return;
    }

    copy(`${window.location.origin}/sign-up/${mutation.data}`);
  };

  return (
    <div className="flex space-x-2 ">
      <Input
        value={
          mutation.data
            ? `${window.location.origin}/sign-up/${mutation.data}`
            : ""
        }
        placeholder="*********************"
        readOnly
      />
      <Button
        className={cn(
          "inline-flex min-w-[9rem] shrink-0 items-center space-x-2 transition-all",
        )}
        onClick={copyOrGenerate}
        variant="secondary"
      >
        {mutation.data ? (
          copied ? (
            <Check className="mr-2 h-4 w-4" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )
        ) : (
          <Wrench className="mr-2 h-4 w-4" />
        )}
        {mutation.data ? (copied ? "Copied" : "Copy") : "Generate"} Link
      </Button>
    </div>
  );
}

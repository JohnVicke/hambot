"use client";

import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { api } from "~/trpc/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function CopyInviteLink() {
  const { copy, copied } = useCopyToClipboard();
  const mutation = api.auth.inviteLink.useMutation();

  const copyOrGenerate = () => {
    if (!mutation.data) {
      mutation.mutate();
      return;
    }

    copy(mutation.data);
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
        className="min-w-[8rem] shrink-0"
        onClick={copyOrGenerate}
        variant="secondary"
      >
        {mutation.data ? (copied ? "Copied" : "Copy") : "Generate"} Link
      </Button>
    </div>
  );
}

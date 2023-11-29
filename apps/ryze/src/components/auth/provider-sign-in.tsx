"use client";

import { signIn } from "next-auth/react";
import type { ClientSafeProvider } from "next-auth/react";

interface ProviderSignInProps {
  provider: ClientSafeProvider;
}

export function ProviderSignIn(props: ProviderSignInProps) {
  return (
    <button type="button" onClick={() => signIn(props.provider.id)}>
      Sign in with {props.provider.name}
    </button>
  );
}

import React from "react";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";

import { ProviderSignIn } from "~/components/auth/provider-sign-in";
import { getServerAuthSession } from "~/server/auth";

export default async function SigninPage() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/dashboard");
  }

  const providers = await getProviders();

  if (!providers) {
    return <div>Error no providers</div>;
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        <React.Fragment key={provider.id}>
          <ProviderSignIn provider={provider} />
        </React.Fragment>
      ))}
    </>
  );
}

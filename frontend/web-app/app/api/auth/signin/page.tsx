import EmptyFilter from '@/app/components/EmptyFilter';
import React from 'react';

export default async function SignIn({
  params,
}: {
  params: Promise<{ callbackUrl: string }>;
}) {
  const { callbackUrl } = await params;

  return (
    <EmptyFilter
      title='You need to be logged in to do that'
      subtitle='Please click below to login'
      showLogin
      callbackUrl={callbackUrl}
    />
  );
}

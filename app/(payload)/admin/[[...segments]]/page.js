import config from '@/payload.config';
import { RootPage } from '@payloadcms/next/views';
import React from 'react';

export default function Page({ params, searchParams }) {
  return <RootPage config={config} params={params} searchParams={searchParams} />;
}

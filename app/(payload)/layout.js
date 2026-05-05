import config from '@/payload.config';
import { RootLayout } from '@payloadcms/next/layouts';
import React from 'react';

import '@payloadcms/next/css';

export default function Layout({ children }) {
  return <RootLayout config={config}>{children}</RootLayout>;
}

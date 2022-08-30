import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'z2vmw3at',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
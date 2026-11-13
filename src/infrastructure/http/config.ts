/**
 * Single source of truth for every API root the app talks to.
 * NEXT_PUBLIC_* vars are inlined by Next at build time.
 */
export const apiRoot: string = process.env.NEXT_PUBLIC_NEXT_APP_API_ROOT || ''

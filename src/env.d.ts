/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_APP_NAME: string;
  readonly PUBLIC_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
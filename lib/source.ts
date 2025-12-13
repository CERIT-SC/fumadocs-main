import { docs } from 'fumadocs-mdx:collections/server';
import { loader } from 'fumadocs-core/source';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Inevitable
      return icon as any;
  },
  source: docs.toFumadocsSource(),
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;

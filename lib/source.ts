import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Inevitable
      return icon as any;
  },
  source: createMDXSource(docs, meta),
});

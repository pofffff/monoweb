import { notFound } from 'next/navigation';

import type { PageParams } from '@shared/types';

import { datoClient } from '@myran/api';
import { BlockContent } from '@myran/components/server';

interface PageProps {
  params: PageParams;
}

// export async function generateMetadata(
//   { params }: PageProps,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   // return await getPageMetadata(locale, params.slug, parent);
// }

async function fetchData(params: PageParams) {
  return await datoClient().getPage(params.slug);
}

export const revalidate = 15 * 60;

export default async function Page({ params }: PageProps) {
  try {
    const page = await fetchData(params);
    if (
      !page
    ) {
      notFound();
    }

    return <BlockContent blocks={page.content} />;
  }
  catch (error) {
    console.error(error);
    notFound();
  }
}

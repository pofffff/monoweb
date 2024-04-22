import Head from 'next/head';
import { useRouter } from 'next/router';

import { Image1Fragment } from 'types';

import { StyledPageLayout } from './styled-page-layout';

interface Props {
  children: React.ReactNode;
  title?: string | null;
  description?: string | null;
  image: Image1Fragment;
}

export const PageLayout: React.FC<Props> = ({
  children,
  title,
  description,
  image,
}) => {
  const { asPath } = useRouter();
  const url = asPath.split('?')[0];
  const adress = 'https://www.yoururl.com';
  const href = `${adress}${url}`;
  const hrefLang = 'en';
  const canonical = href;

  return (
    <div>
      <Head>
        {canonical && (
          <link key="canonical" href={canonical || ''} rel="canonical" />
        )}
        {title && (
          <>
            <title>{title}</title>
            <meta content={title} property="og:title" />
            <meta content={title} name="twitter:title" />
          </>
        )}
        {description && (
          <>
            <meta content={description} name="description" />
            <meta content={description} property="og:description" />
            <meta content={description} name="twitter:description" />
          </>
        )}
        {/* {metadata?.type && <meta property="og:type" content={metadata.type} />} */}
        {image?.url && (
          <>
            <meta content={image.url} property="og:image" />
            <meta content={image.url} property="twitter:image" />
          </>
        )}
        {image?.alt && (
          <meta content={image.alt} property="twitter:image:alt" />
        )}
        <meta content="summary" name="twitter:card" />
        <link
          key={href}
          href={href}
          hrefLang={hrefLang}
          rel="alternate"
        />
      </Head>
      <StyledPageLayout>{children}</StyledPageLayout>
    </div>
  );
};

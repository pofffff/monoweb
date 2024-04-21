import Head from 'next/head'
import { Image1Fragment } from 'types'
import { useRouter } from 'next/router'
import { StyledPageLayout } from './styled-page-layout'

interface Props {
  children: React.ReactNode
  title?: string | null
  description?: string | null
  image: Image1Fragment
}

export const PageLayout: React.FC<Props> = ({
  children,
  title,
  description,
  image,
}) => {
  const { asPath } = useRouter()
  const url = asPath.split('?')[0]
  const adress = 'https://www.yoururl.com'
  const href = `${adress}${url}`
  const hrefLang = 'en'
  const canonical = href

  return (
    <div>
      <Head>
        {canonical && (
          <link rel="canonical" href={canonical || ''} key="canonical" />
        )}
        {title && (
          <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
          </>
        )}
        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="twitter:description" content={description} />
          </>
        )}
        {/* {metadata?.type && <meta property="og:type" content={metadata.type} />} */}
        {image?.url && (
          <>
            <meta property="og:image" content={image.url} />
            <meta property="twitter:image" content={image.url} />
          </>
        )}
        {image?.alt && (
          <meta property="twitter:image:alt" content={image.alt} />
        )}
        <meta name="twitter:card" content="summary" />
        <link rel="alternate" hrefLang={hrefLang} href={href} key={href} />
      </Head>
      <StyledPageLayout>{children}</StyledPageLayout>
    </div>
  )
}

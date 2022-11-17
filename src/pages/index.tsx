import BannerCard from '@components/common/banner-card';
import Container from '@components/ui/container';
import BrandGridBlock from '@containers/brand-grid-block';
import CategoryBlock from '@containers/category-block';
import Layout from '@components/layout/layout';
import BannerWithProducts from '@containers/banner-with-products';
import BannerBlock from '@containers/banner-block';
import Divider from '@components/ui/divider';
import ProductsFeatured from '@containers/products-featured';
import BannerSliderBlock from '@containers/banner-slider-block';
import ExclusiveBlock from '@containers/exclusive-block';
import Subscription from '@components/common/subscription';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import { homeThreeBanner as banner } from '@framework/static/banner';
import { homeThreeMasonryBanner as masonryBanner } from '@framework/static/banner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ROUTES } from '@utils/routes';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    { router.push("/search") }
  }, []);
  return (
    <>
      <BannerBlock data={masonryBanner} />
      <Container>
        <CategoryBlock sectionHeading="Procure por Categoria" type="rounded" />
        <ProductsFeatured sectionHeading="Produtos em Destaque" />
      </Container>
      <BannerSliderBlock />
      <Container>
        <BannerCard
          key={`banner--key${banner[0].id}`}
          banner={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <BannerCard
          key={`banner--key${banner[1].id}`}
          banner={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <NewArrivalsProductFeed />
        <ExclusiveBlock />
        <BannerWithProducts
          sectionHeading="Nossos Produtos"
          categorySlug="/search"
        />
        <BrandGridBlock sectionHeading="Marcas em Destaque" />
        <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};

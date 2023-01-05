import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import BannerBlock from '@containers/banner-block';
import Divider from '@components/ui/divider';
import { homeThreeMasonryBanner as masonryBanner } from '@framework/static/banner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

export default function Home() {
    return (
        <>
            <BannerBlock data={masonryBanner} />
            <Container>

            </Container>
            <Divider className="mb-0" />
        </>
    );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    await fetch(process.env.NEXT_PUBLIC_REST_API_ENDPOINT + '/refresh')
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

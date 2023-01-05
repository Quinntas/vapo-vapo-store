import Layout from '@components/layout/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        async function fetchRefresh() {
            const res = await fetch(process.env.NEXT_PUBLIC_REST_API_ENDPOINT + '/refresh')
            setData(await res.json())
        }

        fetchRefresh()
    }, []);
    return (
        <>
            {JSON.stringify(data)}
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

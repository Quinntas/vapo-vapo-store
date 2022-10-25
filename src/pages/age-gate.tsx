import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import AgeGate from "@components/auth/age-gate-form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function SignInPage() {
	return (
		<>
			<Container>
				<div className="py-16 lg:py-20">
					<AgeGate />
				</div>
			</Container>
		</>
	);
}

SignInPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};

import { ILFlag } from "@components/icons/ILFlag";
import { SAFlag } from "@components/icons/SAFlag";
import { CNFlag } from "@components/icons/CNFlag";
import { USFlag } from "@components/icons/USFlag";
import { DEFlag } from "@components/icons/DEFlag";
import { ESFlag } from "@components/icons/ESFlag";
export const siteSettings = {
	name: "ChawkBazar",
	description:
		"Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
	author: {
		name: "RedQ, Inc.",
		websiteUrl: "https://redq.io",
		address: "",
	},
	logo: {
		url: "/assets/images/logo.svg",
		alt: "ChawkBazar",
		href: "/",
		width: 95,
		height: 30,
	},
	defaultLanguage: "pt",
	currencyCode: "BRL",
	site_header: {
		menu: [
			{
				id: 1,
				path: "/",
				label: "Home",
			},
			{
				id: 2,
				path: "/search?q=men-wear",
				label: "Produtos",
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: "/search?q=top-wear",
								label: "Vapes",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=t-shit-shirtrt",
										label: "vape 1",
									},
									{
										id: 2,
										path: "/search?q=casual-shirts", label: "vape 1",
									},
									{
										id: 3,
										path: "/search?q=formal-shirts", label: "vape 2",
									},
									{
										id: 4,
										path: "/search?q=blazwers-coats", label: "vape 3",
									},
									{
										id: 5,
										path: "/search?q=suits", label: "vape 4",
									},
									{
										id: 6,
										path: "/search?q=jackets", label: "vape 5",
									},
								],
							},
							{
								id: 2,
								path: "/search?q=belt-scarves",
								label: "Atomizadores",
							},
							{
								id: 3,
								path: "/search?q=watches-wearables",
								label: "Coils",
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: "/search?q=western-wear",
								label: "Pods Descartaveis",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=dresses",
										label: "Pod 1",
									},
									{
										id: 2,
										path: "/search?q=jumpsuits",
										label: "Pod 2",
									},
									{
										id: 3,
										path: "/search?q=tops-t-shirt",
										label: "Pod 3",
									},
									{
										id: 4,
										path: "/search?q=shorts-skirts",
										label: "Pod 4",
									},
									{
										id: 5,
										path: "/search?q=shurgs",
										label: "Pod 5",
									},
									{
										id: 6,
										path: "/search?q=shurgs",
										label: "Pod 6",
									},
								],
							},
							{
								id: 2,
								path: "/search?q=plus-size",
								label: "CBD",
							},
							{
								id: 3,
								path: "/search?q=sunglasses-frames",
								label: "Tabacaria",
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: "/search?q=footwear",
								label: "Freebase",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=flats",
										label: "0mg",
									},
									{
										id: 2,
										path: "/search?q=casual-shoes",
										label: "3mg",
									},
									{
										id: 3,
										path: "/search?q=heels",
										label: "6mg",
									},
									{
										id: 4,
										path: "/search?q=boots",
										label: "12mg",
									},
								],
							},
							{
								id: 2,
								path: "/search?q=sports-active-wear",
								label: "Acessorios",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=clothing",
										label: "123",
									},
									{
										id: 2,
										path: "/search?q=footwear",
										label: "345",
									},
									{
										id: 3,
										path: "/search?q=sports-accessories",
										label: "678",
									},
								],
							},
						],
					},
					{
						id: 4,
						columnItems: [
							{
								id: 1,
								path: "/search?q=lingerie-sleepwear",
								label: "Nic Salt",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=bra",
										label: "salt 1",
									},
									{
										id: 2,
										path: "/search?q=briefs",
										label: "salt 2",
									},
									{
										id: 3,
										path: "/search?q=sleepwear",
										label: "salt 3",
									},
								],
							},
							{
								id: 2,
								path: "/search?q=belt-scarves",
								label: "Omg",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=makeup",
										label: "omg 1",
									},
									{
										id: 2,
										path: "/search?q=skincare",
										label: "omg 2",
									},
									{
										id: 3,
										path: "/search?q=premium-beauty",
										label: "omg 3",
									},
									{
										id: 4,
										path: "/search?q=lipsticks",
										label: "omg 4",
									},
								],
							},
						],
					},
					{
						id: 5,
						columnItems: [
							{
								id: 1,
								path: "/search?q=gadgets",
								label: "Sedas",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=smart-wearables",
										label: "Seda 1",
									},
									{
										id: 2,
										path: "/search?q=headphones",
										label: "Seda 2",
									},
								],
							},
							{
								id: 2,
								path: "/search?q=jewellers",
								label: "Piteiras",
								columnItemItems: [
									{
										id: 1,
										path: "/search?q=fashion-jewellers",
										label: "1",
									},
									{
										id: 2,
										path: "/search?q=fine-jewellers",
										label: "2",
									},
								],
							},
							{
								id: 3,
								path: "/search?q=backpacks",
								label: "Dichavadores",
							},
							{
								id: 4,
								path: "/search?q=handbags-wallets",
								label: "Case/Estojo",
							},
						],
					},
				],
			},
			{
				id: 5,
				path: "/search",
				label: "Loja",
			},
		],
		mobileMenu: [
			{
				id: 1,
				path: "/",
				label: "menu-demos",
				subMenu: [
					{
						id: 1,
						path: "/",
						label: "menu-modern",
					},
					{
						id: 2,
						path: "/standard",
						label: "menu-standard",
					},
					{
						id: 3,
						path: "/minimal",
						label: "menu-minimal",
					},
					{
						id: 4,
						path: "/vintage",
						label: "menu-vintage",
					},
					{
						id: 5,
						path: "/classic",
						label: "menu-classic",
					},
				],
			},
			{
				id: 2,
				path: "/search?q=men-wear",
				label: "menu-men-wear",
				subMenu: [
					{
						id: 1,
						path: "/search?q=top-wear",
						label: "menu-top-wear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=t-shit-shirtrt",
								label: "menu-t-shirt",
							},
							{
								id: 2,
								path: "/search?q=casual-shirts",
								label: "menu-casual-shirts",
							},
							{
								id: 3,
								path: "/search?q=formal-shirts",
								label: "menu-formal-shirts",
							},
							{
								id: 4,
								path: "/search?q=blazwers-coats",
								label: "menu-blazwers-coats",
							},
							{
								id: 5,
								path: "/search?q=suits",
								label: "menu-suits",
							},
							{
								id: 6,
								path: "/search?q=jackets",
								label: "menu-jackets",
							},
						],
					},
					{
						id: 2,
						path: "/search?q=belt-scarves",
						label: "menu-belt-scarves",
					},
					{
						id: 3,
						path: "/search?q=watches-wearables",
						label: "menu-watches-wearables",
					},
					{
						id: 4,
						path: "/search?q=western-wear",
						label: "menu-western-wear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=dresses",
								label: "menu-dresses",
							},
							{
								id: 2,
								path: "/search?q=jumpsuits",
								label: "menu-jumpsuits",
							},
							{
								id: 3,
								path: "/search?q=tops-t-shirt",
								label: "menu-tops-shirts",
							},
							{
								id: 4,
								path: "/search?q=shorts-skirts",
								label: "menu-shorts-skirts",
							},
							{
								id: 5,
								path: "/search?q=shurgs",
								label: "menu-shurgs",
							},
							{
								id: 6,
								path: "/search?q=blazers",
								label: "menu-blazers",
							},
						],
					},
					{
						id: 5,
						path: "/search?q=plus-size",
						label: "menu-plus-size",
					},
					{
						id: 6,
						path: "/search?q=sunglasses-frames",
						label: "menu-sunglasses-frames",
					},
					{
						id: 7,
						path: "/search?q=footwear",
						label: "menu-footwear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=flats",
								label: "menu-flats",
							},
							{
								id: 2,
								path: "/search?q=casual-shoes",
								label: "menu-casual-shoes",
							},
							{
								id: 3,
								path: "/search?q=heels",
								label: "menu-heels",
							},
							{
								id: 4,
								path: "/search?q=boots",
								label: "menu-boots",
							},
						],
					},
					{
						id: 8,
						path: "/search?q=sports-active-wear",
						label: "menu-sports-active-wear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=clothing",
								label: "menu-clothing",
							},
							{
								id: 2,
								path: "/search?q=footwear",
								label: "menu-footwear",
							},
							{
								id: 3,
								path: "/search?q=sports-accessories",
								label: "menu-sports-accessories",
							},
						],
					},
					{
						id: 9,
						path: "/search?q=lingerie-sleepwear",
						label: "menu-lingerie-sleepwear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=bra",
								label: "menu-bra",
							},
							{
								id: 2,
								path: "/search?q=briefs",
								label: "menu-briefs",
							},
							{
								id: 3,
								path: "/search?q=sleepwear",
								label: "menu-sleepwear",
							},
						],
					},
					{
						id: 10,
						path: "/search?q=belt-scarves",
						label: "menu-belt-scarves",
						subMenu: [
							{
								id: 1,
								path: "/search?q=makeup",
								label: "menu-makeup",
							},
							{
								id: 2,
								path: "/search?q=skincare",
								label: "menu-skincare",
							},
							{
								id: 3,
								path: "/search?q=premium-beauty",
								label: "menu-premium-beauty",
							},
							{
								id: 4,
								path: "/search?q=lipsticks",
								label: "menu-lipsticks",
							},
						],
					},
					{
						id: 11,
						path: "/search?q=gadgets",
						label: "menu-gadgets",
						subMenu: [
							{
								id: 1,
								path: "/search?q=smart-wearables",
								label: "menu-smart-wearables",
							},
							{
								id: 2,
								path: "/search?q=headphones",
								label: "menu-headphones",
							},
						],
					},
					{
						id: 12,
						path: "/search?q=jewellers",
						label: "menu-jewellers",
						subMenu: [
							{
								id: 1,
								path: "/search?q=fashion-jewellers",
								label: "menu-fashion-jewellers",
							},
							{
								id: 2,
								path: "/search?q=fine-jewellers",
								label: "menu-fine-jewellers",
							},
						],
					},
					{
						id: 13,
						path: "/search?q=backpacks",
						label: "menu-backpacks",
					},
					{
						id: 14,
						path: "/search?q=handbags-wallets",
						label: "menu-handbags-wallets",
					},
				],
			},
			{
				id: 3,
				path: "/search?q=women-wear",
				label: "menu-women-wear",
			},
			{
				id: 4,
				path: "/search?q=casual-wear",
				label: "menu-casual-wear",
				subMenu: [
					{
						id: 1,
						path: "/search?q=top-wear",
						label: "menu-top-wear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=t-shit-shirtrt",
								label: "menu-t-shirt",
							},
							{
								id: 2,
								path: "/search?q=casual-shirts",
								label: "menu-casual-shirts",
							},
							{
								id: 3,
								path: "/search?q=formal-shirts",
								label: "menu-formal-shirts",
							},
							{
								id: 4,
								path: "/search?q=blazwers-coats",
								label: "menu-blazwers-coats",
							},
							{
								id: 5,
								path: "/search?q=suits",
								label: "menu-suits",
							},
							{
								id: 6,
								path: "/search?q=jackets",
								label: "menu-jackets",
							},
						],
					},
					{
						id: 2,
						path: "/search?q=belt-scarves",
						label: "menu-belt-scarves",
					},
					{
						id: 3,
						path: "/search?q=watches-wearables",
						label: "menu-watches-wearables",
					},
					{
						id: 4,
						path: "/search?q=western-wear",
						label: "menu-western-wear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=dresses",
								label: "menu-dresses",
							},
							{
								id: 2,
								path: "/search?q=jumpsuits",
								label: "menu-jumpsuits",
							},
							{
								id: 3,
								path: "/search?q=tops-t-shirt",
								label: "menu-tops-shirts",
							},
							{
								id: 4,
								path: "/search?q=shorts-skirts",
								label: "menu-shorts-skirts",
							},
							{
								id: 5,
								path: "/search?q=shurgs",
								label: "menu-shurgs",
							},
							{
								id: 6,
								path: "/search?q=blazers",
								label: "menu-blazers",
							},
						],
					},
					{
						id: 5,
						path: "/search?q=plus-size",
						label: "menu-plus-size",
					},
					{
						id: 6,
						path: "/search?q=sunglasses-frames",
						label: "menu-sunglasses-frames",
					},
					{
						id: 7,
						path: "/search?q=footwear",
						label: "menu-footwear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=flats",
								label: "menu-flats",
							},
							{
								id: 2,
								path: "/search?q=casual-shoes",
								label: "menu-casual-shoes",
							},
							{
								id: 3,
								path: "/search?q=heels",
								label: "menu-heels",
							},
							{
								id: 4,
								path: "/search?q=boots",
								label: "menu-boots",
							},
						],
					},
					{
						id: 8,
						path: "/search?q=sports-active-wear",
						label: "menu-sports-active-wear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=clothing",
								label: "menu-clothing",
							},
							{
								id: 2,
								path: "/search?q=footwear",
								label: "menu-footwear",
							},
							{
								id: 3,
								path: "/search?q=sports-accessories",
								label: "menu-sports-accessories",
							},
						],
					},
					{
						id: 9,
						path: "/search?q=lingerie-sleepwear",
						label: "menu-lingerie-sleepwear",
						subMenu: [
							{
								id: 1,
								path: "/search?q=bra",
								label: "menu-bra",
							},
							{
								id: 2,
								path: "/search?q=briefs",
								label: "menu-briefs",
							},
							{
								id: 3,
								path: "/search?q=sleepwear",
								label: "menu-sleepwear",
							},
						],
					},
					{
						id: 10,
						path: "/search?q=belt-scarves",
						label: "menu-belt-scarves",
						subMenu: [
							{
								id: 1,
								path: "/search?q=makeup",
								label: "menu-makeup",
							},
							{
								id: 2,
								path: "/search?q=skincare",
								label: "menu-skincare",
							},
							{
								id: 3,
								path: "/search?q=premium-beauty",
								label: "menu-premium-beauty",
							},
							{
								id: 4,
								path: "/search?q=lipsticks",
								label: "menu-lipsticks",
							},
						],
					},
					{
						id: 11,
						path: "/search?q=gadgets",
						label: "menu-gadgets",
						subMenu: [
							{
								id: 1,
								path: "/search?q=smart-wearables",
								label: "menu-smart-wearables",
							},
							{
								id: 2,
								path: "/search?q=headphones",
								label: "menu-headphones",
							},
						],
					},
					{
						id: 12,
						path: "/search?q=jewellers",
						label: "menu-jewellers",
						subMenu: [
							{
								id: 1,
								path: "/search?q=fashion-jewellers",
								label: "menu-fashion-jewellers",
							},
							{
								id: 2,
								path: "/search?q=fine-jewellers",
								label: "menu-fine-jewellers",
							},
						],
					},
					{
						id: 13,
						path: "/search?q=backpacks",
						label: "menu-backpacks",
					},
					{
						id: 14,
						path: "/search?q=handbags-wallets",
						label: "menu-handbags-wallets",
					},
				],
			},
			{
				id: 5,
				path: "/search",
				label: "menu-search",
			},
			{
				id: 6,
				path: "/",
				label: "menu-pages",
				subMenu: [
					{
						id: 1,
						path: "/",
						label: "menu-users",
						subMenu: [
							{
								id: 1,
								path: "/my-account",
								label: "menu-my-account",
							},
							{
								id: 2,
								path: "/signin",
								label: "menu-sign-in",
							},
							{
								id: 3,
								path: "/signup",
								label: "menu-sign-up",
							},
							{
								id: 4,
								path: "/forget-password",
								label: "menu-forget-password",
							},
						],
					},
					{
						id: 2,
						path: "/faq",
						label: "menu-faq",
					},
					{
						id: 3,
						path: "/privacy",
						label: "menu-privacy-policy",
					},
					{
						id: 4,
						path: "/terms",
						label: "menu-terms-condition",
					},
					{
						id: 5,
						path: "/contact-us",
						label: "menu-contact-us",
					},
					{
						id: 6,
						path: "/checkout",
						label: "menu-checkout",
					},
					{
						id: 7,
						path: "/collections/mens-collection",
						label: "menu-collection",
					},
					{
						id: 8,
						path: "/category/man",
						label: "menu-category",
					},
					{
						id: 9,
						path: "/order",
						label: "menu-order",
					},
					{
						id: 10,
						path: "/404",
						label: "menu-404",
					},
				],
			},
		],

	},
};
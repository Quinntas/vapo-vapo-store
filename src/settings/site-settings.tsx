
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
				label: "Home",
			},
			{
				id: 2,
				path: "/search?q=men-wear",
				label: "Produtos",
				subMenu: [
					{
						id: 1,
						path: "/search?q=top-wear",
						label: "1",
						subMenu: [
							{
								id: 1,
								path: "/search?q=top-wear",
								label: "Vapes",
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
						path: "/search?q=top-wear",
						label: "2",
						subMenu: [
							{
								id: 1,
								path: "/search?q=western-wear",
								label: "Pods Descartaveis",

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
						path: "/search?q=top-wear",
						label: "3",
						subMenu: [
							{
								id: 1,
								path: "/search?q=footwear",
								label: "Freebase",

							},
							{
								id: 2,
								path: "/search?q=sports-active-wear",
								label: "Acessorios",

							},
						],
					},
					{
						id: 4,
						path: "/search?q=top-wear",
						label: "4",
						subMenu: [
							{
								id: 1,
								path: "/search?q=lingerie-sleepwear",
								label: "Nic Salt",

							},
							{
								id: 2,
								path: "/search?q=belt-scarves",
								label: "Omg",

							},
						],
					},
					{
						id: 5,
						path: "/search?q=top-wear",
						label: "5",
						subMenu: [
							{
								id: 1,
								path: "/search?q=gadgets",
								label: "Sedas",

							},
							{
								id: 2,
								path: "/search?q=jewellers",
								label: "Piteiras",

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

	},
};

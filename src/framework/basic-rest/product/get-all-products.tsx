import { QueryOptionsType, ProductVapo } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useInfiniteQuery } from "react-query";

type PaginatedProduct = {
	data: ProductVapo[];
	paginatorInfo: any;
};

const fetchProducts = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await http.get(API_ENDPOINTS.PRODUCTS);
	let returnData = data.filter((item: any) => item.quantity !== 0);
	if (_params.category) {
		var categories = _params.category.split(',')
		returnData = returnData.filter((item: any) => item.category != null ? categories.includes(item.category.name) : null)
	}
	if (_params.subcategory) {
		var subcategories = _params.subcategory.split(',')
		returnData = returnData.filter((item: any) => item.category != null ? subcategories.includes(item.category.sub_category_name) : null)
	}
	if (_params.price) {
		var prices = _params.price.split(',')
		var filterdData: any = []
		prices.forEach(function (price: any) {
			var values = price.split('-')
			filterdData.push(returnData.filter((item: any) => item.sale_price >= values[0] && item.sale_price <= values[1]))
		})
		returnData = filterdData.reduce((initial: any, current: any) => initial.concat(current), [])
	}
	return {
		data: returnData,
		paginatorInfo: {
			nextPageUrl: "",
		},
	};
};

const useProductsQuery = (options: QueryOptionsType) => {
	return useInfiniteQuery<PaginatedProduct, Error>(
		[API_ENDPOINTS.PRODUCTS, options],
		fetchProducts,
		{
			getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
		}
	);
};

export { useProductsQuery, fetchProducts };

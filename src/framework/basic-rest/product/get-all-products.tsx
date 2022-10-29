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
		console.log(categories)
		returnData = returnData.filter((item: any) => item.category != null ? categories.includes(item.category.name) : null)
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

import { QueryOptionsType, ProductVapo } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchBestSellerProducts = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await http.get(API_ENDPOINTS.BEST_SELLER_PRODUCTS);
	return data as ProductVapo[];
};
export const useBestSellerProductsQuery = (options: QueryOptionsType) => {
	return useQuery<ProductVapo[], Error>(
		[API_ENDPOINTS.BEST_SELLER_PRODUCTS, options],
		fetchBestSellerProducts
	);
};

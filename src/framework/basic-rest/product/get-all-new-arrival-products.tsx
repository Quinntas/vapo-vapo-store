import { QueryOptionsType, ProductVapo } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchNewArrivalProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.PRODUCTS);
  let returnData = data
  if (_params.per_page)
    returnData = data.slice(0, _params.per_page)
  return returnData as ProductVapo[];
};
export const useNewArrivalProductsQuery = (options: QueryOptionsType) => {
  return useQuery<ProductVapo[], Error>(
    [API_ENDPOINTS.PRODUCTS, options],
    fetchNewArrivalProducts
  );
};

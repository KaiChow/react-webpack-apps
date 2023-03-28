import { request } from "@/utils/http";
//获取订单的信息
export const GetOrderInfoApi = <T>(OrderId: number) =>
  request.post<T>(`/oms/api/OrderFbaDetail/GetById?OrderId=${OrderId}`);

// 货物信息
export const GetOrderCargosInfoApi = <T>(OrderId: number) =>
  request.post<T>(`/oms/api/OrderFbaDetail/GetShipperList?OrderId=${OrderId}`);

import { request } from "@/utils/http";

//获取港口信息
export type PortItemTypes = {
  CityCode: number;
  CityNameCn: string;
  CityNameEn: string;
  Code: string;
  CountryCode: string;
  CountryNameCn: string;
  CountryNameEn: string;
  CreatedBy: number;
  CreatedTime: string;
  Id: number;
  NameCn: string;
  NameEn: string;
  PortType: number;
  TransportMode: number;
  TransportModeName: string;
  UpdatedBy: number;
  UpdatedTime: string;
};
export type PortListTypes = {
  PageIndex: number;
  PageSize: number;
  TotalCount: number;
  TotalPages: number;
  Items: PortItemTypes[];
};

export type PortListParmasTypes = {
  KeyWord?: string;
  PageIndex?: number;
  PageSize?: number;
  TransportMode?: number;
};

export const GetPortList = <T>(params: PortListParmasTypes) =>
  request.post<T>(`/cms/api/BaseData/GetPortPageList`, params);

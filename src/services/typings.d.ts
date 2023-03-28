declare namespace API {
  type GET_USER = {
    ClientId: string;
    AccountName: string;
    Password: string;
  };
  type GET_USER_RESULT = {
    AccountName: string;
    Password: string;
    Token: string;
  };

  type BaseDataTypes = {
    LoaddingPort: string;
    LoaddingPortCode: string;
    LoaddingPortEn: string;
  };

  type GET_ORDER_INFO = {
    OrderNo: string;
    HblNo: string;
    FactoryReleaseTimeStr: string;
    AgentReleaseTimeStr: string;
    RefWarehouseNo: string;
    CreatedTime: string;
    MblNo: string;
    BusinessType: number;
    BaseData: BaseDataTypes;
  };
}

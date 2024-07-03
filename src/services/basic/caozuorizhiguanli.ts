// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取日志列表 GET /api/monitor/operation-log */
export async function operationLogControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.OperationLogControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.OperationLogEntity[]>('/api/monitor/operation-log', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 10
      pageSize: '10',

      ...params,
    },
    ...(options || {}),
  });
}

/** 获取日志详情 GET /api/monitor/operation-log/${param0} */
export async function operationLogControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.OperationLogControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.OperationLogEntity>(`/api/monitor/operation-log/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

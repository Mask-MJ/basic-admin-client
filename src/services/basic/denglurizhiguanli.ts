// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取日志列表 GET /api/monitor/login-log */
export async function loginLogControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LoginLogControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.LoginLogEntity[]>('/api/monitor/login-log', {
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

/** 获取日志信息 GET /api/monitor/login-log/${param0} */
export async function loginLogControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LoginLogControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.LoginLogEntity>(`/api/monitor/login-log/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取阀门列表 GET /api/project/valve */
export async function valveControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ValveControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.ValveEntity[]>('/api/project/valve', {
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

/** 创建阀门 POST /api/project/valve */
export async function valveControllerCreate(
  body: API.CreateValveDto,
  options?: { [key: string]: any },
) {
  return request<API.ValveEntity>('/api/project/valve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取阀门信息 GET /api/project/valve/${param0} */
export async function valveControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ValveControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ValveRunInfoEntity>(`/api/project/valve/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除阀门 DELETE /api/project/valve/${param0} */
export async function valveControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ValveControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/project/valve/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新阀门信息 PATCH /api/project/valve/${param0} */
export async function valveControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ValveControllerUpdateParams,
  body: API.UpdateValveDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ValveEntity>(`/api/project/valve/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取阀门历史数据列表 GET /api/project/valve/history */
export async function valveControllerFindAllHistoryDataList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ValveControllerFindAllHistoryDataListParams,
  options?: { [key: string]: any },
) {
  return request<API.ValveHistoryListEntity[]>('/api/project/valve/history', {
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

/** 获取阀门历史数据列表详情 GET /api/project/valve/history/${param0} */
export async function valveControllerFindHistoryData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ValveControllerFindHistoryDataParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ValveHistoryEntity[]>(`/api/project/valve/history/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取阀门运行信息 GET /api/project/valve/run-info/${param0} */
export async function valveControllerFindRunInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ValveControllerFindRunInfoParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ValveRunInfoEntity>(`/api/project/valve/run-info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

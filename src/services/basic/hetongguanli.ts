// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取合同列表 GET /api/project/contract */
export async function contractControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ContractControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.ContractEntity[]>('/api/project/contract', {
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

/** 创建合同 POST /api/project/contract */
export async function contractControllerCreate(
  body: API.CreateContractDto,
  options?: { [key: string]: any },
) {
  return request<API.ContractEntity>('/api/project/contract', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取合同信息 GET /api/project/contract/${param0} */
export async function contractControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ContractControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ContractEntity>(`/api/project/contract/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除合同 DELETE /api/project/contract/${param0} */
export async function contractControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ContractControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/project/contract/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新合同信息 PATCH /api/project/contract/${param0} */
export async function contractControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ContractControllerUpdateParams,
  body: API.UpdateContractDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ContractEntity>(`/api/project/contract/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

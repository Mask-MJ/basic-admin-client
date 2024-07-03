// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取字典列表 GET /api/system/dict-type */
export async function dictTypeControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DictTypeControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.DictTypeEntity[]>('/api/system/dict-type', {
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

/** 创建字典 POST /api/system/dict-type */
export async function dictTypeControllerCreate(
  body: API.CreateDictTypeDto,
  options?: { [key: string]: any },
) {
  return request<API.DictTypeEntity>('/api/system/dict-type', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取字典详情 GET /api/system/dict-type/${param0} */
export async function dictTypeControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DictTypeControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DictTypeEntity>(`/api/system/dict-type/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除字典 DELETE /api/system/dict-type/${param0} */
export async function dictTypeControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DictTypeControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/dict-type/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新字典 PATCH /api/system/dict-type/${param0} */
export async function dictTypeControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DictTypeControllerUpdateParams,
  body: API.UpdateDictTypeDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DictTypeEntity>(`/api/system/dict-type/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

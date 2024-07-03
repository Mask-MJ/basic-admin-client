// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取字典数据列表 GET /api/system/dict-data */
export async function dictDataControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DictDataControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.DictDataEntity[]>('/api/system/dict-data', {
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

/** 创建字典数据 POST /api/system/dict-data */
export async function dictDataControllerCreate(
  body: API.CreateDictDataDto,
  options?: { [key: string]: any },
) {
  return request<API.DictDataEntity>('/api/system/dict-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取字典数据详情 GET /api/system/dict-data/${param0} */
export async function dictDataControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DictDataControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DictDataEntity>(`/api/system/dict-data/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除字典数据 DELETE /api/system/dict-data/${param0} */
export async function dictDataControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DictDataControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/dict-data/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新字典数据 PATCH /api/system/dict-data/${param0} */
export async function dictDataControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DictDataControllerUpdateParams,
  body: API.UpdateDictDataDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DictDataEntity>(`/api/system/dict-data/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

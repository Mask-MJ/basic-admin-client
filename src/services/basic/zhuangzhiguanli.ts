// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取装置列表 GET /api/project/device */
export async function deviceControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeviceControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.DeviceEntity[]>('/api/project/device', {
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

/** 创建装置 POST /api/project/device */
export async function deviceControllerCreate(
  body: API.CreateDeviceDto,
  options?: { [key: string]: any },
) {
  return request<API.DeviceEntity>('/api/project/device', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取装置信息 GET /api/project/device/${param0} */
export async function deviceControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeviceControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DeviceEntity>(`/api/project/device/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除装置 DELETE /api/project/device/${param0} */
export async function deviceControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeviceControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/project/device/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新装置 PATCH /api/project/device/${param0} */
export async function deviceControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeviceControllerUpdateParams,
  body: API.UpdateDeviceDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DeviceEntity>(`/api/project/device/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

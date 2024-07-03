// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取菜单列表 GET /api/system/menu */
export async function menuControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.MenuEntity[]>('/api/system/menu', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建菜单 POST /api/system/menu */
export async function menuControllerCreate(
  body: API.CreateMenuDto,
  options?: { [key: string]: any },
) {
  return request<API.MenuEntity>('/api/system/menu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取菜单详情 GET /api/system/menu/${param0} */
export async function menuControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.MenuEntity>(`/api/system/menu/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除菜单 DELETE /api/system/menu/${param0} */
export async function menuControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/menu/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新菜单 PATCH /api/system/menu/${param0} */
export async function menuControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuControllerUpdateParams,
  body: API.UpdateMenuDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.MenuEntity>(`/api/system/menu/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

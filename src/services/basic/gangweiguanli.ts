// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取岗位列表 GET /api/system/post */
export async function postControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.PostControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.PostEntity[]>('/api/system/post', {
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

/** 创建岗位 POST /api/system/post */
export async function postControllerCreate(
  body: API.CreatePostDto,
  options?: { [key: string]: any },
) {
  return request<API.PostEntity>('/api/system/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取岗位详情 GET /api/system/post/${param0} */
export async function postControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.PostControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PostEntity>(`/api/system/post/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除岗位 DELETE /api/system/post/${param0} */
export async function postControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.PostControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/post/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新岗位 PATCH /api/system/post/${param0} */
export async function postControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.PostControllerUpdateParams,
  body: API.UpdatePostDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PostEntity>(`/api/system/post/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

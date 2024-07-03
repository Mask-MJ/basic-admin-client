// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取部门列表 GET /api/system/dept */
export async function deptControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeptControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.DeptEntity[]>('/api/system/dept', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建部门 POST /api/system/dept */
export async function deptControllerCreate(
  body: API.CreateDeptDto,
  options?: { [key: string]: any },
) {
  return request<API.DeptEntity>('/api/system/dept', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取部门详情 GET /api/system/dept/${param0} */
export async function deptControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeptControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DeptEntity>(`/api/system/dept/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除部门 DELETE /api/system/dept/${param0} */
export async function deptControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeptControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/dept/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新部门 PATCH /api/system/dept/${param0} */
export async function deptControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeptControllerUpdateParams,
  body: API.UpdateDeptDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DeptEntity>(`/api/system/dept/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

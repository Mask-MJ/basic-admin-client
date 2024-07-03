// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户列表 GET /api/system/user */
export async function userControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.UserEntity[]>('/api/system/user', {
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

/** 创建用户 POST /api/system/user */
export async function userControllerCreate(
  body: API.CreateUserDto,
  options?: { [key: string]: any },
) {
  return request<API.UserEntity>('/api/system/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息 GET /api/system/user/${param0} */
export async function userControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserEntity>(`/api/system/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除用户 DELETE /api/system/user/${param0} */
export async function userControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新用户信息 PATCH /api/system/user/${param0} */
export async function userControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserControllerUpdateParams,
  body: API.UpdateUserDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserEntity>(`/api/system/user/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 PATCH /api/system/user/changePassword */
export async function userControllerChangePassword(
  body: API.ChangePasswordDto,
  options?: { [key: string]: any },
) {
  return request<API.UserEntity>('/api/system/user/changePassword', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息 GET /api/system/user/info */
export async function userControllerFindSelf(options?: { [key: string]: any }) {
  return request<API.UserEntity>('/api/system/user/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 上传用户头像 POST /api/system/user/uploadAvatar */
export async function userControllerUpload(options?: { [key: string]: any }) {
  return request<any>('/api/system/user/uploadAvatar', {
    method: 'POST',
    ...(options || {}),
  });
}

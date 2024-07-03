// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 刷新令牌 POST /api/authentication/refresh-token */
export async function authenticationControllerRefreshTokens(
  body: API.RefreshTokenDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/authentication/refresh-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登录 POST /api/authentication/sign-in */
export async function authenticationControllerSignIn(
  body: API.SignInDto,
  options?: { [key: string]: any },
) {
  return request<API.SignInEntity>('/api/authentication/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 POST /api/authentication/sign-up */
export async function authenticationControllerSignUp(
  body: API.SignUpDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/authentication/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

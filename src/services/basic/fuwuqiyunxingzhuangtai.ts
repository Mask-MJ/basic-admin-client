// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 运行信息 GET /api/monitor/info */
export async function infoControllerSystemInfo(options?: { [key: string]: any }) {
  return request<API.InfoEntity>('/api/monitor/info', {
    method: 'GET',
    ...(options || {}),
  });
}

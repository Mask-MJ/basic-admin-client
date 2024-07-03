// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取分析任务列表 GET /api/project/analysis-task */
export async function analysisTaskControllerFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AnalysisTaskControllerFindAllParams,
  options?: { [key: string]: any },
) {
  return request<API.AnalysisTaskEntity[]>('/api/project/analysis-task', {
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

/** 创建分析任务 POST /api/project/analysis-task */
export async function analysisTaskControllerCreate(
  body: API.CreateAnalysisTaskDto,
  options?: { [key: string]: any },
) {
  return request<API.AnalysisTaskEntity>('/api/project/analysis-task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取分析任务详情 GET /api/project/analysis-task/${param0} */
export async function analysisTaskControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AnalysisTaskControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.AnalysisTaskEntity>(`/api/project/analysis-task/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除分析任务 DELETE /api/project/analysis-task/${param0} */
export async function analysisTaskControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AnalysisTaskControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/project/analysis-task/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新分析任务 PATCH /api/project/analysis-task/${param0} */
export async function analysisTaskControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AnalysisTaskControllerUpdateParams,
  body: API.UpdateAnalysisTaskDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.AnalysisTaskEntity>(`/api/project/analysis-task/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 执行分析任务 POST /api/project/analysis-task/execute/${param0} */
export async function analysisTaskControllerExecute(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AnalysisTaskControllerExecuteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/project/analysis-task/execute/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取分析任务结果 GET /api/project/analysis-task/result/${param0} */
export async function analysisTaskControllerResult(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AnalysisTaskControllerResultParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.AnalysisTaskResultEntity>(`/api/project/analysis-task/result/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 上传PDF文件 POST /api/project/analysis-task/uploadPdf */
export async function analysisTaskControllerUploadPdf(options?: { [key: string]: any }) {
  return request<any>('/api/project/analysis-task/uploadPdf', {
    method: 'POST',
    ...(options || {}),
  });
}

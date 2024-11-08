import type { ResumeEvent, ResumeStatus, eventData } from './types'
import request from '@/axios'

/** 获取简历状态列表 */
export function getResumeStatusApi(): Promise<IResponse<ResumeStatus[]>> {
  return request.get({ url: '/api/v1/resumestate/list/status' })
}

/** 获取简历事件列表 */
export function getResumeEventsApi(): Promise<IResponse<ResumeEvent[]>> {
  return request.get({ url: '/api/v1/resumestate/list/event' })
}

/** 执行简历事件 */
export function executeResumeEventApi(resumeId: string, event: number, data: eventData): Promise<IResponse<ResumeEvent[]>> {
  return request.post({ url: `/api/v1/resumestate/execute/${resumeId}`, params: { event }, data })
}

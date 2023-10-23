import apiClient from './AxiosClient'
import type { AxiosResponse } from 'axios'
import type { TeacherItem } from '@/type'

export default {
    getTeacher(
      perPage: number,
      page: number
    ): Promise<AxiosResponse<TeacherItem[]>> {
      return apiClient.get<TeacherItem[]>(
        "/teachers?_limit=" + perPage + "&_page=" + page
      );
    },
    getTeacherById(id: number): Promise<AxiosResponse<TeacherItem>> {
      return apiClient.get<TeacherItem>("teachers/" + id.toString());
    },
    saveTeacher(teachers: TeacherItem): Promise<AxiosResponse<TeacherItem>> {
      return apiClient.post<TeacherItem>("/teachers", teachers);
    },
    getTeacherBy(): Promise<AxiosResponse<TeacherItem[]>> {
      return apiClient.get<TeacherItem[]>("/teachers");
    },
    updateTeacherById(
      id: any,
      teacher: any
    ): Promise<AxiosResponse<TeacherItem>> {
      return apiClient.put<TeacherItem>("/teachers/" + id.toString(), teacher);
    },
    getTeacherByKeyword(keyword: string, perPage: number, page: number):Promise<AxiosResponse<TeacherItem[]>> {
      return apiClient.get<TeacherItem[]>('/teachers?title=' +keyword +'&_limit='+ perPage+'&_page=' +page)
    },
  };
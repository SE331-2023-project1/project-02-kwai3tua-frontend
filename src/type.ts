export interface StudentItem {
  value(value: any): unknown
  id: number
  studentId: number
  firstName: string
  lastName: string
  profileImg: string[]
  department: string
  advisor: TeacherItem
}

export interface StudentTeacher {
  id: number
  firstName: string
  lastName: string
  studentID: string
  profileImg: string[]
  department: string
}

export interface TeacherItem {
  id: number
  firstName: string
  lastName: string
  profileImg: string[]
  department: string
  studentList: StudentItem[]
  student: StudentTeacher
}

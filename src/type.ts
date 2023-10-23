export interface StudentItem {
value(value: any): unknown
    id: number
    studentId: number
    name: string
    surname: string
    profileImg: string[]
    department: string
    advisor: StudentAdvisor | string
}

export interface StudentAdvisor{
    id: number
    name: string
}
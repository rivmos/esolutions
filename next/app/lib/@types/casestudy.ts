export type CaseStudyState = {
    id?: string
    title?: string,
    description?: string,
    content?: string,
    image?: string,
}


export type CaseStudiesState = CaseStudyState[]


export type GetCaseStudyResponse = {
    data: CaseStudiesState
    total: number
}

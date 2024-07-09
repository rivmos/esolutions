export type CaseStudyState = {
    id?: string
    title?: string,
    description?: string,
    content?: string,
    image?: string,
}


export type CaseStudies = CaseStudyState[]


export type GetCaseStudyResponse = {
    data: CaseStudies
    total: number
}

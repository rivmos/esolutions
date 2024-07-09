import ApiService from "./ApiService"

export async function apiAddCaseStudy<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: '/casestudies/save',
        method: 'post',
        data,
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
}

export async function apiGetCaseStudies<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: '/casestudies',
        method: 'post',
        data,
    })
}

export async function apiGetSingleCaseStudy<T, U extends Record<string, unknown>>(
    params: U
) {
    return ApiService.fetchData<T>({
        url: `/casestudies/${params.id}`,
        method: 'get',
    })
}


export async function apiGetAllCaseStudies<T>() {
    return ApiService.fetchData<T>({
        url: '/casestudies/all',
        method: 'get',
    })
}

export async function apiDeleteCaseStudy<T, U extends Record<string, unknown>>(data: U) {
    return ApiService.fetchData<T>({
        url: `/casestudies/delete`,
        method: 'delete',
        data
    })
}
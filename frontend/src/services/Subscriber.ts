import ApiService from "./ApiService";

export async function apiNewSubscriber<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: '/subscribers',
        method: 'post',
        data,
    })
}
export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
}

// export const baseUrl = 'https://esolutions.onrender.com'
export const baseUrl = 'http://localhost:9999'

const appConfig: AppConfig = {
    apiPrefix: `${baseUrl}/api`,
    authenticatedEntryPath: '/app/dashboard',
    unAuthenticatedEntryPath: '/web/home',
    tourPath: '/',
    locale: 'en',
    enableMock: false,
}


export default appConfig
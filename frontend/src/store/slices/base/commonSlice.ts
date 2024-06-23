import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { Artists, Categories, CategoryState, Banners } from '@/@types/artist'
import { apiGetAllCategories, apiGetCategories } from '@/services/CategoryService'
import { apiGetAllArtists } from '@/services/ArtistService'
import { apiGetAllBannerImages } from '@/services/BannerService'
import { getBannerImages } from '@/views/app/Banner/BannerList/store'
import { apiGetAllCaseStudies } from '@/services/CaseStudy'
import { CaseStudies } from '@/@types/casestudy'

export type CommonState = {
    loading: boolean
    currentRouteKey: string
    allCaseStudies: CaseStudies
}

export const initialState: CommonState = {
    loading: false,
    currentRouteKey: '',
    allCaseStudies:[],
}


export const getAllCaseStudies = createAsyncThunk(
    SLICE_BASE_NAME + '/getAllCaseStudies',
    async () => {
        const response = await apiGetAllCaseStudies<
            CaseStudies
        >()
        return response.data
    }
)



export const commonSlice = createSlice({
    name: `${SLICE_BASE_NAME}/common`,
    initialState,
    reducers: {
        setCurrentRouteKey: (state, action: PayloadAction<string>) => {
            state.currentRouteKey = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCaseStudies.fulfilled, (state, action) => {
                state.allCaseStudies = action.payload
                state.loading = false
            })
            .addCase(getAllCaseStudies.pending, (state, action) => {
                state.loading = true
            })

    }
})

export const { setCurrentRouteKey } = commonSlice.actions

export default commonSlice.reducer

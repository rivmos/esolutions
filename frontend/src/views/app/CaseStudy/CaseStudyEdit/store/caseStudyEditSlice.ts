import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetSalesProduct,
    apiPutSalesProduct,
    apiDeleteSalesProducts,
} from '@/services/SalesService'
import { ArtistState } from '@/@types/artist'
import { apiAddArtist, apiGetArtistProfile } from '@/services/ArtistService'
import { CaseStudyState } from '@/@types/casestudy'
import { apiAddCaseStudy, apiGetSingleCaseStudy } from '@/services/CaseStudy'

export type CaseStudyEditState = {
    loading: boolean
    caseStudyData: CaseStudyState
}


export const SLICE_NAME = 'caseStudyEditSlice'

export const getSingleCaseStudy = createAsyncThunk(
    SLICE_NAME + '/getSingleCaseStudy',
    async (data: { id: string }) => {
        const response = await apiGetSingleCaseStudy<
            CaseStudyState,
            { id: string }
        >(data)
        return response.data
    }
)

export const updateProduct = async <T, U extends Record<string, unknown>>(
    data: U
) => {
    const response = await apiAddCaseStudy<T, U>(data)
    return response.data
}

export const deleteProduct = async <T, U extends Record<string, unknown>>(
    data: U
) => {
    const response = await apiDeleteSalesProducts<T, U>(data)
    return response.data
}

const initialState: CaseStudyEditState = {
    loading: true,
    caseStudyData: {},
}

const artistEditSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleCaseStudy.fulfilled, (state, action) => {
                state.caseStudyData = action.payload
                state.loading = false
            })
            .addCase(getSingleCaseStudy.pending, (state) => {
                state.loading = true
            })
    },
})

export default artistEditSlice.reducer

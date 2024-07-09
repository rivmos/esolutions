import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetSalesProducts,
    apiDeleteSalesProducts,
} from '@/services/SalesService'
import type { TableQueries } from '@/@types/common'
import { CaseStudies, GetCaseStudyResponse } from '@/@types/casestudy'
import { apiGetCaseStudies, apiDeleteCaseStudy } from '@/services/CaseStudy'


type FilterQueries = {
    name: string
    category: string[]
    status: number[]
    productStatus: number
}

export type CaseStudyListState = {
    loading: boolean
    deleteConfirmation: boolean
    selectedCaseStudy: string
    tableData: TableQueries
    filterData: FilterQueries
    caseStudyList: CaseStudies
}

type GetSalesProductsRequest = TableQueries & { filterData?: FilterQueries }
type GetCaseStudyRequest = {
    pageIndex?: number
    pageSize?: number
    query?: string
}
export const SLICE_NAME = 'caseStudyListSlice'

export const getCaseStudies = createAsyncThunk(
    SLICE_NAME + '/getCaseStudies',
    async (data:GetCaseStudyRequest) => {
        const response = await apiGetCaseStudies<
            GetCaseStudyResponse,
            GetCaseStudyRequest
        >(data)
        return response.data
    }
)


export const deleteArtist = async (data: { id: string | string[] }) => {
    const response = await apiDeleteCaseStudy<
        boolean,
        { id: string | string[] }
    >(data)
    return response.data
}


export const initialTableData: TableQueries = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

const initialState: CaseStudyListState = {
    loading: false,
    deleteConfirmation: false,
    selectedCaseStudy: '',
    caseStudyList: [],
    tableData: initialTableData,
    filterData: {
        name: '',
        category: ['bags', 'cloths', 'devices', 'shoes', 'watches'],
        status: [0, 1, 2],
        productStatus: 0,
    },
}

const artistListSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {
        updateCaseStudyList: (state, action) => {
            state.caseStudyList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
        toggleDeleteConfirmation: (state, action) => {
            state.deleteConfirmation = action.payload
        },
        setSelectedCaseStudy: (state, action) => {
            state.selectedCaseStudy = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCaseStudies.fulfilled, (state, action) => {
                state.caseStudyList = action.payload.data
                state.tableData.total = action.payload.total
                state.loading = false
            })
            .addCase(getCaseStudies.pending, (state) => {
                state.loading = true
            })
    },
})

export const {
    updateCaseStudyList,
    setTableData,
    setFilterData,
    toggleDeleteConfirmation,
    setSelectedCaseStudy,
} = artistListSlice.actions

export default artistListSlice.reducer

import React, { useEffect } from 'react';
import reducer, { getSingleCaseStudy, useAppDispatch, useAppSelector } from '../CaseStudyEdit/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { injectReducer } from '@/store';
import CaseStudyPage from '@/components/template/CaseStudyPage';

injectReducer('caseStudyEditSlice', reducer)

const ArtistProfile = () => {
    const dispatch = useAppDispatch()

    const location = useLocation()
    const navigate = useNavigate()

    const caseStudyData = useAppSelector(
        (state) => state.caseStudyEditSlice.data.caseStudyData
    )
    const loading = useAppSelector(
        (state) => state.caseStudyEditSlice.data.loading
    )

    const fetchData = (data: { id: string }) => {
        dispatch(getSingleCaseStudy(data))
    }

    useEffect(() => {
        const path = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        )
        const rquestParam = { id: path }
        fetchData(rquestParam)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    return (
        <CaseStudyPage caseStudyData={caseStudyData} webVersion/>
    );
};

export default ArtistProfile;

import reducer from './store'
import { injectReducer } from '@/store'
import AdaptableCard from '@/components/shared/AdaptableCard'
import CaseStudyTable from './components/CaseStudyTable'
import CaseStudyTableTools from './components/CaseStudyTableTools'

injectReducer('caseStudyListSlice', reducer)

const ArtistList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Case Studies</h3>
                <CaseStudyTableTools />
            </div>
            <CaseStudyTable />
        </AdaptableCard>
    )
}

export default ArtistList

import CaseStudyForm, {
    FormModel,
    SetSubmitting,
} from '@/views/app/CaseStudy/CaseStudyForm'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useNavigate } from 'react-router-dom'
import { apiAddCaseStudy } from '@/services/CaseStudy'

const CaseStudyNew = () => {
    const navigate = useNavigate()

    const addCaseStudy = async (data: FormModel) => {
        const response = await apiAddCaseStudy<boolean, FormModel>(data)
        return response.data
    }

    const handleFormSubmit = async (
        values: FormModel,
        setSubmitting: SetSubmitting
    ) => {
        setSubmitting(true)
        console.log(values)
        const success = await addCaseStudy(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Case study successfully added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/app/casestudies/')
        }
    }

    const handleDiscard = () => {
        navigate('/app/casestudies/')
    }

    return (
        <>
            <CaseStudyForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default CaseStudyNew

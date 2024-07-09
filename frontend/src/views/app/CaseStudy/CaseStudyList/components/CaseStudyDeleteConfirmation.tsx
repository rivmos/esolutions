import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import {
    toggleDeleteConfirmation,
    useAppDispatch,
    useAppSelector,
    deleteArtist,
    getCaseStudies,
} from '../store'

const ArtistDeleteConfirmation = () => {
    const dispatch = useAppDispatch()
    const dialogOpen = useAppSelector(
        (state) => state.caseStudyListSlice.data.deleteConfirmation
    )
    const selectedProduct = useAppSelector(
        (state) => state.caseStudyListSlice.data.selectedCaseStudy
    )
    const tableData = useAppSelector(
        (state) => state.caseStudyListSlice.data.tableData
    )

    const onDialogClose = () => {
        dispatch(toggleDeleteConfirmation(false))
    }

    const onDelete = async () => {
        dispatch(toggleDeleteConfirmation(false))
        // const success = await deleteProduct({ id: selectedProduct })
        const success = await deleteArtist({ id: selectedProduct })

        if (success) {
            // dispatch(getProducts(tableData))
            dispatch(getCaseStudies(tableData))
            toast.push(
                <Notification
                    title={'Successfuly Deleted'}
                    type="success"
                    duration={2500}
                >
                    Case study successfuly deleted
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
        }
    }

    return (
        <ConfirmDialog
            isOpen={dialogOpen}
            type="danger"
            title="Delete Case Study"
            confirmButtonColor="red-600"
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            onCancel={onDialogClose}
            onConfirm={onDelete}
        >
            <p>
                Are you sure you want to delete this case study? All record related
                to this case study will be deleted as well. This action cannot be
                undone.
            </p>
        </ConfirmDialog>
    )
}

export default ArtistDeleteConfirmation

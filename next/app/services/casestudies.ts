import { baseUrl } from "@/app/lib/constants/app.constant"
import axios from "axios"

export const fetchCaseStudies = () => {
    const response = axios.get(`${baseUrl}/casestudies/all`)
    return response
}
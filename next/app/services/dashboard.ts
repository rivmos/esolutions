import { baseUrl } from "@/app/lib/constants/app.constant"
import axios from "axios"

export const fetchDashboardStats = () => {
    const response = axios.get(`${baseUrl}/dashboard`)
    return response
}
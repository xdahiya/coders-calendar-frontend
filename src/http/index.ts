import { BACKEND_URL } from "@/constants"
import axios from "axios"

export const getProfile = async () => {
    const res = await axios.get(`${BACKEND_URL}/profile`, { withCredentials: true });

    return res.data;
}

export const getAllEvents = async () => {
    const res = await axios.get(`${BACKEND_URL}/events`, { withCredentials: true });
    return res.data;
}

export const addEvent = async (event: any) => {
    const res = await axios.post(`${BACKEND_URL}/events`, event, {
        withCredentials: true
    });
    return res.data;
}

export const deleteEvent = async (eventId: any) => {
    const res = await axios.delete(`${BACKEND_URL}/events/${eventId}`, {
        withCredentials: true
    });
    return res.data;
}

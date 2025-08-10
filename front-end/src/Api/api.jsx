import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000"
});


export const fetchMovieInfo = async ()=>{
    const res = await api.get("/events");
    return res.status===200?res.data:[];
}

export const createTicketInfo = async (ticket)=>{
    const res = await api.post("/ticket",ticket );
    return res.status===200?res.data:[];
}
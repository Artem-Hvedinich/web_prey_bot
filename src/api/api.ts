import axios from "axios";
import type {UserType} from "../stores/users/type";


let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjliZTk5ZTU3MGRlZTA5YWQ2YzQ5YjMzMjQ0YzcwZGJkOWFkZTJiNTM0NWJkNjQ4ODM3ZDc4YzJjZmUwMjc5Y2JjZDk4YTYyMjA1NmM0YTQiLCJpYXQiOjE2ODUxNzgyNjIuNjMxMzYyLCJuYmYiOjE2ODUxNzgyNjIuNjMxMzY0LCJleHAiOjE4MTEzMjIyNjIuNDY4NjUxLCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.IOmWaIq7LRDF2EGrxXnYZn6VKhNaS4gt-LH6haRQNv4agtn6nyPmGWsI4E0dZbKVdWy3Bo9bkp9hlW4BmA39hROT1bRoDNRD-ktlLwM9kt2rP8xE8KkrD2d5yM7YKu5nKvHd3nVJmZ7FyWnCtF7mXs2iPwOFqKmAq8Wsotv570CD8-x725jTUxQM736ZskfdklwDtugrCZKTokk_V-2f0Yt99A8HN37OR8NtT8tE1v9zgJRidchtqZyeqPfBNXM2Sg4GS4ZIXpmNe0yx2PbjaBPL3hGj_Hcgvtwac1nyIDM9KXM9bQ9AOtK1X7_HppRDp6fpUZSF6LnS5OjqRWAsjrXotFzDVdhTIlCVTvVDNN0XiMvxv7PsusxYLHlY43w4JnH52dco6GtJOn-kxKb9-WwS0iCR1rKZ-z1MqrkxtU0bhmlHbUHb-hrIPBl7ZM5_KcPXHyKbqDNswNdZ7e8WfEKWej1ohBoeDZspcL3Mo6S3fC4MpgzkrWddJ4H3a8dpP27hJoi1jPIwIAHjhWpuQY9Of3kSR-4Qxs89YuFYFOBHxesOyp17N_LEUBugUHJS0k2gIdjla8aHsvX3k9cpOmHoXarWy_9cPWQ3c1MxXPkC01mmNLcEU2ZghE833QGFuAT3rPROOz2_N1ffmK3kgX9I18oeoa-7hC6LbnCK9IU";
export const instance = axios.create({
    baseURL: "http://localhost:5050/",
    headers: {
        "content-type": "application/json",
        Accept: "application/json",
        // Authorization: token ? "Bearer " + token : null,
    },
    // withCredentials: true,
});

export type MetaType = {
    current_page: number,
    last_page: number,
    per_page: number,
    total: number,
    to: number
}
type responseType = {
    data: {
        data: any,
        message: string,
        meta?: MetaType
    }
}

export const userAPI = {
    getUsers(page: number): Promise<responseType> {
        return instance.get(`user?page=${page}`);
    },
    updateUserFromId(id: string, data: UserType): Promise<responseType> {
        return instance.put(`user/${id}`, data);
    },
    createUser(data: UserType): Promise<responseType> {
        return instance.post(`user`, data)
    },
    removeUser(id: string): Promise<responseType> {
        return instance.delete(`user/${id}`)
    }
};

axios.interceptors.response.use(response => {

    return response
},)

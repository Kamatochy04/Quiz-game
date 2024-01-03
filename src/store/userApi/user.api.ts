import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface IUser {
    id: string,
    name: string,
    password: string
}

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getAllUsers: builder.query<any, void>({
            query: () => 'users'
        }),
        addUser: builder.mutation<IUser, Partial<IUser>>({
            query: (body) => {
                return{
                    url:'users',
                    method: 'POST',
                    body,
                }
            }
        })
    })
})

export const {useAddUserMutation} = userApi
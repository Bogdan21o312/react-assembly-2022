import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITest} from "../models/ITest";
import {BASE_URL} from "../config";

export const testAPI = createApi({
    reducerPath: 'testAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllTest: build.query<ITest[], any>({
            query: () => ({
                url: '/test'
            })
        })
    })
})
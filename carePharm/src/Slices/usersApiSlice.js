import { apiSlice } from './ApiSlice.js'
import { USERS_URL } from '../Constants.js';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      login: builder.mutation({
          query: credentials => ({
              url: `${USERS_URL}/auth`,
              method: 'POST',
              body: { ...credentials }
          })
      }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PATCH',
        body: data,
      }),
    }),
    // getUsers: builder.query({
    //   query: () => ({
    //     url: USERS_URL,
    //   }),
    //   providesTags: ['User'],
    //   keepUnusedDataFor: 5,
    // }),

  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,

} = userApiSlice;

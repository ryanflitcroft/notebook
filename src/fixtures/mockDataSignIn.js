export const mockDataSignIn = {
  access_token: 'MOCK_ACCESS_TOKEN',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'MOCK_REFRESH_TOKEN',
  user: {
    id: '12345',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'user2@test.com',
    email_confirmed_at: '2022-05-06T18:17:22.404341Z',
    phone: '',
    confirmed_at: '2022-05-06T18:17:22.404341Z',
    last_sign_in_at: '2022-05-09T15:16:03.281080831Z',
    app_metadata: {
      provider: 'email',
      providers: ['email'],
    },
    user_metadata: {},
    identities: [
      {
        id: '12345',
        user_id: '12345',
        identity_data: {
          sub: '12345',
        },
        provider: 'email',
        last_sign_in_at: '2022-05-06T18:17:22.402588Z',
        created_at: '2022-05-06T18:17:22.402628Z',
        updated_at: '2022-05-06T18:17:22.402632Z',
      },
    ],
    created_at: '2022-05-06T18:17:22.400173Z',
    updated_at: '2022-05-09T15:16:03.282214Z',
  },
};

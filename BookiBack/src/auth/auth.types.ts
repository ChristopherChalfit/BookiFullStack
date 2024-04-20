export type AuthBody = { email: string; password: string };
export type userPayload = { userId: string };
export type requestWithUser = { user: userPayload };
export type createUser = { email: string; name: string; password: string };

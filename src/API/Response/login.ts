export type LoginModel = {
    status: number,
    result: LoginResult,
};

type LoginResult = {
    id: number,
    email: string,
    token: string,
};

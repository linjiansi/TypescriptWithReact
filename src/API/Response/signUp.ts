export type SignUpModel = {
    status: number,
    result: SignUpResult,
};

type SignUpResult = {
    id: number,
    email: string,
    token: string,
};
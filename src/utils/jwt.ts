import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const createToken = (payload : JwtPayload, scret : string, expiresIn : SignOptions) => {
const token = jwt.sign(payload, scret, {
    expiresIn
}as SignOptions)
}

export const jwtUtils = {
    createToken
}
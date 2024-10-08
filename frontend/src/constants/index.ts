
// Website Details (API and Frontend)
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

// Old Website Details
export const OLD_SITE_BASE_URL = process.env.NEXT_PUBLIC_OLD_SITE_BASE_URL || "";


// ! These two secrets should be in .env file and not in any other file
export const jwtConfig = {
    secret: process.env.NEXT_PUBLIC_JWT_SECRET || "",
    expirationTime: process.env.NEXT_PUBLIC_JWT_EXPIRATION || "",
    refreshTokenSecret: process.env.NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET || ""
}

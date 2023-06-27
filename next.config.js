/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_APPLICATION_CREDENTIALS: './src/app/config/firebase-key.json'

    },
}

module.exports = nextConfig

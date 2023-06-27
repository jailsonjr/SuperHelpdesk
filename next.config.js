/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_APPLICATION_CREDENTIALS: '/Users/jailsonjr/Projects/superdesk/src/config/firebase-key.json',
        URL_BASE: 'http://localhost:3000'
    },
}

module.exports = nextConfig

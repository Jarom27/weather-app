/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        appDir: true,
    },
    images:{
        dangerouslyAllowSVG : true,
        unoptimized: true
    },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = 
{
    imagens : {
        remotePatterns: [
            {
                protocol:"https",
                hostname: " httpstatusdogs.com",
                port:"",
                pathname:"/img/**"


            },
        ],
    },
}

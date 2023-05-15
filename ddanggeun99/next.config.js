/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  env: { NEXT_PUBLIC_SERVER_URL: process.env.SERVER_URL, },
  output: {
    // 정적 HTML을 내보내기로 설정합니다.
    export: true,
  }
} 

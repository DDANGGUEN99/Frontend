import Cookies from 'js-cookie';
import axios from 'axios';

const accessToken = Cookies.get('accesstoken');
const refreshToken = Cookies.get('refreshtoken');

const instance = axios.create({
    baseURL: `${ process.env.NEXT_PUBLIC_SERVER_URL }`,
    headers: { Access_Token: `Bearer ${accessToken}` },
    });
export default instance;
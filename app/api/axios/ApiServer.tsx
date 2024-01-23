import axios from 'axios';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

const baseURL = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:3500";

const ApiServer = () => {
  const defaultOptions = {
    baseURL,
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    const session = await getServerSession(authOptions)
    if (session) {
      request.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },

  );
  return instance;
};

export default ApiServer();

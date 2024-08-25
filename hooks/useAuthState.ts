import { authState } from "@/lib/firebase-auth/auth_state_listener";
import { useQuery } from "react-query";

export const useAuth = () => {
  const {data, isLoading} = useQuery("authData", () => {
    const response: any = authState();
    return response
  })

  console.log(data)


  return {
    user: data,
    isLogedIn: data?.uid && true,
    isLoading
  };
};

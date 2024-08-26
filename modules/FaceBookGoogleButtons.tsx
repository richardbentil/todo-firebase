import { singInWithFacebook } from '@/lib/firebase-auth/auth_facebook_signin_popup';
import { singInWithGoogle } from '@/lib/firebase-auth/auth_google_signin_popup';
//import { updateuserProfile } from '@/lib/firebase-auth/auth_update_profile';
import React, { useState } from 'react'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { useMutation } from 'react-query';

function FaceBookGoogleButtons({page, router, text}: any) {
  const [msg, setMsg] = useState("");
  const [authType, setAuthType] = useState<string>("")

  const { mutate }: any = useMutation(
    async () => {
      return authType == "google" ? await singInWithGoogle() : singInWithFacebook();
    },
    {
      onSuccess(data: any, variables) {
        console.log(data)
        if (data?.errorCode) {
          setMsg(
            data?.errorCode?.includes("invalid-credential")
              ? "Invalid credentials"
              : data.errorMessage
          );
        } else {
          setMsg("Signup successful");
          //page == "signup" ? updateuserProfile(data?.user, { displayName: variables.name }): {};
          router?.push("/todos");
        }
      },
      onError(error: any) {
        setMsg(error.message);
      },
    }
  );
  return (
    <>
    <div className="mb-4">
    <button
      type="submit"
      className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded flex justify-center items-center text-center"
      onClick={() => {
        setAuthType("google")
        mutate()
      }}
    >
     <FcGoogle className="me-2" size={25} /> {text} with google
    </button>
  </div>
  <div className="mb-6">
    <button
      type="submit"
      className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded flex justify-center items-center text-center"
      onClick={() => {
        setAuthType("facebook")
        mutate()
      }}
    >
    <BiLogoFacebookCircle size={25} className="me-2 text-blue-700" />   {text} with facebook
    </button>
  </div>
    </>
  )
}

export default FaceBookGoogleButtons
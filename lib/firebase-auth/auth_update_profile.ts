import { updateProfile } from "firebase/auth";

export const updateuserProfile = (user: any, data: any) =>
  updateProfile(user, data);

import { createClient } from "../supabase/server";

export const getUserInfo = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

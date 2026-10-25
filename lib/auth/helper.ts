import { createClient } from "../supabase/server";

export const getUserInfo = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // fetch userdata
  const { data: profile } = await supabase
    .from("profiles")
    .select("first_name, last_name, email")
    .single();

  return profile;
};

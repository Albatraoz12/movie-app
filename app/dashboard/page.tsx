import { logout } from "@/actions/auth/login";
import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/auth/helper";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getUserInfo();
  if (!user) {
    redirect("/auth/login");
  }

  return (
    <section className="flex gap-3 items-center m-5">
      <h1>Welcome {user.first_name + " " + user.last_name}</h1>
      <Button variant="destructive" onClick={logout} className="cursor-pointer">
        Logout
      </Button>
    </section>
  );
};

export default page;

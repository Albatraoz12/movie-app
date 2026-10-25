import { getUserInfo } from "@/lib/auth/helper";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getUserInfo();
  console.log(user);
  if (!user) {
    redirect("/auth/login");
  }

  return (
    <section>
      <h1>Welcome {user.email}</h1>
    </section>
  );
};

export default page;

import { CircleUserRound, LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { logout } from "@/actions/auth/login";
import { getUserInfo } from "@/lib/auth/helper";

const Navbar = async () => {
  const user = await getUserInfo();
  return (
    <nav className="bg-gray-400 p-4 flex items-center justify-between">
      <div>
        <h1>My MovieDB</h1>
      </div>
      <section>
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full">
                <CircleUserRound />
                <h2>{user.first_name + " " + user.last_name}</h2>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={logout}>
                  <LogOutIcon />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </section>
    </nav>
  );
};

export default Navbar;

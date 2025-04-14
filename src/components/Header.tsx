

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import SoundToggle from './SoundToggle';
import DarkModeToggle from './DarkModeToggle';
import { toast } from "@/hooks/useToast";
import { useAuth } from "@/hooks/useAuth";
import { playSound } from "@/utils/soundUtils";

// Mock data and functions to replace the missing modules
const siteConfig = {
  name: "Resource Conservation"
};

const Header = () => {
  const { isAuth, user, logout } = useAuth();
  const location = useLocation();
  
  const handleSignOut = () => {
    logout();
    playSound('click');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
      variant: "default",
    });
  };

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link to="/" className="flex items-center font-semibold">
          {siteConfig.name}
        </Link>

        <div className="mx-6 hidden space-x-4 sm:flex">
          <Link to="/documentation" className="text-sm font-medium" onClick={() => playSound('click')}>Documentation</Link>
          <Link to="/api-reference" className="text-sm font-medium" onClick={() => playSound('click')}>API</Link>
          <Link to="/research" className="text-sm font-medium" onClick={() => playSound('click')}>Research</Link>
        </div>

        <div className="flex items-center gap-1">
          <SoundToggle />
          <DarkModeToggle />
          {isAuth ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem asChild>
                  <Link to="/profile" onClick={() => playSound('click')}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" onClick={() => playSound('click')}>Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              {location.pathname !== '/login' && (
                <Link to="/login">
                  <Button variant="ghost" size="sm" onClick={() => playSound('click')}>
                    Login
                  </Button>
                </Link>
              )}
              {location.pathname !== '/register' && (
                <Link to="/register">
                  <Button variant="outline" size="sm" onClick={() => playSound('click')}>
                    Register
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

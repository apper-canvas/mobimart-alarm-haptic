import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "@/layouts/Root";
import React from "react";
import ApperIcon from "@/components/ApperIcon";
import BottomNavigation from "@/components/organisms/BottomNavigation";
import Button from "@/components/atoms/Button";

export default function Layout() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {isAuthenticated && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            variant="secondary"
            onClick={logout}
            className="flex items-center gap-2 shadow-lg"
          >
            <ApperIcon name="LogOut" size={18} />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      )}
      <main className="min-h-screen">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

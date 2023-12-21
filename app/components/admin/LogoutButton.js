"use client";
import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import Button from "../UI/Button";

const LogoutButton = () => {
  const { logoutUser } = useAuthContext();
  return (
    <Button
      onClick={logoutUser}
      className="p-2 bg-red-600 hover:bg-red-800 w-fit text-white rounded-sm"
    >
      Cerrar sesión
    </Button>
  );
};

export default LogoutButton;

"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext();

  return <>{user.logged ? children : login}</>;

  return children;
};

export default AdminLayout;

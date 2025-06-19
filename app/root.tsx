import React from "react";
import { Outlet } from "@remix-run/react";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Layout>
      {/* Remix outlet for routes */}
      <Outlet />
    </Layout>
  );
} 
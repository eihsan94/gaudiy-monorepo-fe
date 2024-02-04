import React from "react";
import ReactDOM from "react-dom/client";
import "@repo/libs/styles.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="font-base">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);

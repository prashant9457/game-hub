import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider defaultTheme="dark">
      <ChakraProvider value={defaultSystem}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router = {router}/> 
          <ReactQueryDevtools/>
        </QueryClientProvider>
      </ChakraProvider>
    </ColorModeProvider>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider defaultTheme="dark">
      <ChakraProvider value={defaultSystem}>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools/>
        </QueryClientProvider>
      </ChakraProvider>
    </ColorModeProvider>
  </React.StrictMode>,
);

import { ChakraProvider } from "@chakra-ui/react";
import Provider from "./context/Provider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

function MyApp() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ChakraProvider>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;

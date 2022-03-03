import { makeServer } from "../api"
import { ThemeProvider } from 'styled-components'
import { theme } from './theme';
import { Layout } from './views/Layout';
import "./styles/main.css"
import { Movies } from './views/Movies';
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppProvider } from './contexts/AppProvider';
import { FunctionComponent } from "react";

const queryClient = new QueryClient()

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
          <Layout>
              <AppProvider>
                <Movies></Movies>
              </AppProvider>
          </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
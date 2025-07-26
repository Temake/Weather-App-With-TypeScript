import Layout from "../src/components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherDashboard from "./pages/WeatherDash";
import Citypage from "./pages/citypage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient( );
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<Citypage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

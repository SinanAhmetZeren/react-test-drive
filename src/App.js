import "./App.css";
import Counter from "./features/counter/Counter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavElement from "./navigation/NavElement";
import BosRoute from "./features/bosluk/BosRoute";
import Map from "./features/map/Map";
import Toplar from "./features/toplar/Toplar";
import Params from "./features/params/Params";
import UserVehicleVoyage from "./features/supabase/UserVehicleVoyage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Counters from "./reduxCounter/ReduxCounters";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 200,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-3/4 mx-auto bg-red-100 h-screen">
        <div className="bg-cyan-200 p-2 mt-1 mb-5 flex items-center justify-center w-3/4 mx-auto">
          <span className="font-bold">React Toolkit App</span>
        </div>
        <BrowserRouter>
          <NavElement />

          <Routes>
            <Route index element={<p>hi there</p>} />
            <Route path="counter" element={<Counter />} />
            <Route
              path="otherroute"
              element={<Navigate replace to="/counter" />}
            />
            <Route path="bos_route" element={<BosRoute />} />
            <Route path="map" element={<Map />} />
            <Route path="toplar" element={<Toplar />} />
            <Route path="params/:paramsDegeri" element={<Params />} />
            <Route path="uvv" element={<UserVehicleVoyage />} />
            <Route path="redux-counters" element={<Counters />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;

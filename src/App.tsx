import Home from "./pages/Home";
import Login from "./pages/Login";
import {  Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./http";

function App() {
  const {data:user,isLoading}=useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader2 className="text-black text-7xl" />
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <>
          <Home user={user} />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;

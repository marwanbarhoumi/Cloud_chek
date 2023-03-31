import "./App.css";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "./components/Map";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}


export default App;

import { useState } from "react";

import Home from "./pages/Home";
import SortingArena from "./pages/SortingArena";
import SearchArena from "./pages/SearchArena";
import ComplexityLab from "./pages/ComplexityLab";
import Leaderboard from "./pages/Leaderboard";
import About from "./pages/About";
import NavigationArena from "./pages/NavigationArena";

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const [player, setPlayer] = useState({
    name: "",
    id: "",
  });

  const renderPage = () => {

    switch(currentPage){

      case "sorting":
        return (
          <SortingArena
            player={player}
            setCurrentPage={setCurrentPage}
          />
        );

      case "search":
        return (
          <SearchArena
            setCurrentPage={setCurrentPage}
          />
        );

      case "complexity":
        return (
          <ComplexityLab
            setCurrentPage={setCurrentPage}
          />
        );

      case "leaderboard":
        return (
          <Leaderboard
            setCurrentPage={setCurrentPage}
          />
        );
        case "navigation":
  return (
    <NavigationArena
      setCurrentPage={setCurrentPage}
    />
  );

        case "about":
  return (
    <About
      setCurrentPage={setCurrentPage}
    />
  );

      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            player={player}
            setPlayer={setPlayer}
          />
        );
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
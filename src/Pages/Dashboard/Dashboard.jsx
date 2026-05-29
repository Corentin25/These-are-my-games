import { useState } from "react";
import { GameForm } from "../../Components/GameForm/GameForm";
import "./dashboard.css";

export function Dashboard() {
  const [isAddGame, setIsAddGame] = useState(false);

  const toggleAddGame = () => {
    setIsAddGame(!isAddGame);
  };
  return (
    <>
      <button
        className="addGameButton"
        aria-label="Ajouter un jeu"
        onClick={toggleAddGame}
      >
        {!isAddGame ? "+ Ajouter un jeu" : "Annuler"}
      </button>
      {isAddGame && <GameForm />}
    </>
  );
}

import React, { useState } from "react";
import "./App.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { SwitchTransition, CSSTransition,TransitionGroup} from "react-transition-group";
import CreateNewGameForm from "./components/CreateNewGameForm";
function CreateNewGameButton({ onClick }) {
  return (
    <div className="float-btn w-full mt-40 overflow-hidden">
      <p className="text-3xl text-gray-400 mb-5 text-center">
        Create a new game
      </p>
      <div className="flex justify-center">
        <Fab onClick={onClick} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

function App() {
  const [isFormOpen, setFormOpenState] = useState(false);

  return (
    <div className="container min-w-full h-screen bg-white">
      <div className="flex flex-col box-border h-full">
        <header className="min-w-full p-3 h-14 border-b flex items-center text-green-400 text-3xl font-semibold">
          ♠️ Poker
        </header>
        <main className="flex flex-auto w-full bg-gray-50 px-3 py-4 overflow-auto h-full">
          <SwitchTransition>
            <CSSTransition
              key={isFormOpen ? "open" : "closed"}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              {isFormOpen ? (
                <CreateNewGameForm />
              ) : (
                <CreateNewGameButton
                  onClick={() => setFormOpenState((prev) => !prev)}
                />
              )}
            </CSSTransition>
          </SwitchTransition>
        </main>
        <footer className="relative flex items-center border p-3 h-14"></footer>
      </div>
    </div>
  );
}

export default App;

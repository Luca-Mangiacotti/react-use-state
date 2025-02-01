//componente che crea la struttura di un singolo Accordion tramite
//l'esportazione di una funzione che si serve delle props "title, description"
//che saranno fornite dal Main nel momento in cui andrà a richiamare Accordion

import Btn from "./Btn";
//andiamo ad importare useState di React per poter utilizzare le variabili di stato e quindi reattive
import { useState } from "react";

export default function Accordion({ title, description }) {
  //creiamo la nostra variabile di stato
  const [isOpen, setIsOpen] = useState(false);

  //creiamo una funzione che verrà richiamata dal bottone per cambiare lo stato aperto/chiuso degli accordion,
  //ci serviremo di un altra funzione al suo interno che restituirà alla nostra variabile di stato lo stato opposto di quello
  //che ha al momento del click (funzione di toggle)
  const toggleWin = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  return (
    <div className="acc-container">
      {/*ci serviamo della variabile di stato per gestire il controllo del colore di sfondo dell'head dell'accordion,
    impostiamo una condizione con operatore ternario la quale a seconda se "aperto o chiuso " andrà a colorare il background aggiungendo una classe
    apposita al conenitore*/}
      {isOpen ? (
        <div className="acc-head colorTitle">
          <h2>{title}</h2>
          <button className="btn btnPrimary" onClick={toggleWin}>
            {/* creiamo una condizione con operatore ternario la quale ci restituirà il "-" sul bottone quando isOpen sarà true ( quindi l'accordion è aperto)
            mentre ci restituirà il "+" sul bottone quando isOpen sarà false (quindi con accordion chiuso) */}
            {isOpen ? "-" : "+"}
          </button>
        </div>
      ) : (
        <div className="acc-head">
          {" "}
          <h2>{title}</h2>
          <button className="btn btnPrimary" onClick={toggleWin}>
            {isOpen ? "-" : "+"}
          </button>
        </div>
      )}

      {/* /* utilizziamo la variabile di stato per visualizzare o meno il div che
      contiene la descrizione */}
      {isOpen && (
        <div className="acc-body">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

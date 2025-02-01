//creiamo una funzione nel Main che si serve dei dati di "Languages"
// e del componente "Accordion" per generare una lista di accordion
//tramite il metodo map nella sezione "accordions" del <main>

import Languages from "../../data/Languages";
import Accordion from "./Accordion";

export default function Main() {
  return (
    <main>
      <section className="accordions">
        {Languages.map((language) => {
          return (
            <Accordion
              key={language.id}
              title={language.title}
              description={language.description}
            />
          );
        })}
      </section>
    </main>
  );
}

import { useState } from "react";

function App() {
  const articols = [`bicchieri`, `posate`, `pentolame`];

  const [articol, setArticol] = useState(articols);
  console.log(articol);

  const newArticols = [...articols];

  const [newArticol, setNewArticol] = useState("");

  return (
    <>
      <main>
        <div className="container">
          <h1>Lista articoli</h1>
          <ul>
            {articols.map((articol, index) => (
              <li onChange={setArticol} key={index}>
                {articol}
              </li>
            ))}
          </ul>

          <form className="form-add-articol">
            <input onChange={setNewArticol} type="text" value={newArticol} />
            <input className="btn-form-add" type="submit" value="Aggiungi" />
          </form>
        </div>
      </main>
    </>
  );
}

export default App;

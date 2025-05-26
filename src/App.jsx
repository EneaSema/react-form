import { useState } from "react";

function App() {
  const [articols, setArticols] = useState([
    {
      id: 1,
      title: `bicchieri`,
    },
    {
      id: 2,
      title: `posate`,
    },
    {
      id: 3,
      title: `pentolame`,
    },
  ]);
  console.log(articols);

  const [articol, setArticol] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // QUI QUI QUI
    const newId = articols[articols.length - 1].id + 1;

    const newArticols = [
      ...articols,
      {
        id: newId,
        title: articol,
      },
    ];

    console.log(newArticols);
    setArticols(newArticols); // Settando il nuovo array con il testo inserito
    setArticol("");
    // [e.target.name] : e.target.value;
  };

  return (
    <>
      <main>
        <div className="container">
          <h1>Lista articoli</h1>
          <ul>
            {articols.map((articol, index) => (
              <li key={articol.id}>{articol.title}</li>
            ))}
          </ul>

          <form className="form-add-articol" onSubmit={handleFormSubmit}>
            <input
              onChange={(e) => setArticol(e.target.value)}
              type="text"
              value={articol}
            />
            <input className="btn-form-add" type="submit" value="Aggiungi" />
          </form>
        </div>
      </main>
    </>
  );
}
export default App;

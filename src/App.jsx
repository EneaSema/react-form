function App() {
  const articols = [`bicchieri`, `posate`, `pentolame`];
  console.log(articols);

  return (
    <>
      <main>
        <h1>Lista articoli</h1>
        <ul>
          <li>{articols[0]}</li>
          <li>{articols[1]}</li>
          <li>{articols[2]}</li>
        </ul>
      </main>
    </>
  );
}

export default App;

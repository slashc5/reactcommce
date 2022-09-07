function App() {
  return (
    <header><nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GekkoShop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nuevo Catalogo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ofertas</a>
          </li>
        </ul>
        <span class="navbar-text">
          Recuerda seguirnos en nuestras redes!
        </span>
      </div>
    </div>
  </nav></header>
  );
}

export default App;

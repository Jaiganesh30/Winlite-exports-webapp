import { Routes, Route, Link } from 'react-router-dom'
import ProductsPage from './components/ProductsPage'
import ExportPage from './components/ExportPage'
import bannerImage from './styles/Images/bannerImage1.jpeg'

import './styles/app.scss';

function App() {

  return (
    <>
      <div className="app-root">
        <header className="app-header">
          <h1>Winlite Exports Goods</h1>
          <nav>Search
            <input className="search-text" type='text'/>
          </nav>
          <nav>
            <Link to="/">Products</Link>
            <Link to="/export">Export</Link>
          </nav>
        </header>

        <div>
          <img style={{ width: " 100%",height:"400px" }} src={bannerImage} alt="banner" />
        </div>
       

        <p  className="app-main">
          <h4>Introduction to Winlite Exports</h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/export" element={<ExportPage />} />
          </Routes>
        </main>
        <footer className="app-footer">© {new Date().getFullYear()} Exports Goods</footer>
      </div>
    </>
  )
}

export default App

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
          <h4>Introduction to Maritime Shipping Book and Claim</h4>
          The maritime sector plays a crucial role in global trade. Although it is responsible for more than 80% of world trade by volume, it only contributes around 3% of total global greenhouse gas (GHG) emissions annually. The International Maritime Organization (IMO) and the European Union have outlined stringent pathways for reducing emissions, necessitating the adoption of low and zero-emission fuels.

          However, embarking on that journey faces hurdles such as these fuels’ high cost and availability, which is particularly problematic for price-sensitive cargo (e.g., commodities). This underscores the importance of market-based mechanisms like book and claim, which offer transparency into supply chain emissions and can accelerate the adoption of low and zero-emission fuels by connecting heavy transport decarbonization leaders to corporate consumers, as has been extensively discussed within the Community.

          Implementing a maritime book and claim system presents several challenges, including the diverse range of fuels and emissions factors, the regulatory transition to full lifecycle assessment of fuel emissions (i.e., well-to-wake, which the IMO recently adopted sector-wide in July 2023), and the impact of vessel type and size on energy efficiency and, thus, in emission intensity metrics.


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

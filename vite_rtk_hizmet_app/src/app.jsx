import React from "react"
import Header from "./companents/Header"
import Footer from "./companents/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPages from "./pages/MainPages"
import CategoryDeteilPage from "./pages/CategoryDeteilPage"

function App() {

  return (

    <BrowserRouter>
      <div className="container py-3">
        <Header />
        <main>
          <Routes>
            <Route index element={<MainPages />} />
            <Route path="/category" />
            <Route path=":slug" element={<CategoryDeteilPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

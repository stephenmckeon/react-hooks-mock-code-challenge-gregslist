import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then(setListings)
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} />
    </div>
  )
}

export default App

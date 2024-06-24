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

  const handleDeleteListing = (deletedListingId) => {
    const newListings = listings.filter(
      (listing) => listing.id !== deletedListingId
    )
    setListings(newListings)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer
        handleDeleteListing={handleDeleteListing}
        listings={listings}
      />
    </div>
  )
}

export default App

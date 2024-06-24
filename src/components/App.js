import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

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

  const filteredListings = listings.filter((listing) => {
    const listingDescription = listing.description.toLowerCase()

    return listingDescription.startsWith(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <ListingsContainer
        handleDeleteListing={handleDeleteListing}
        listings={filteredListings}
      />
    </div>
  )
}

export default App

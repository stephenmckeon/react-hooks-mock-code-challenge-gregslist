import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"
import NewForm from "./NewForm"

function App() {
  const [fetchTrigger, setFetchTrigger] = useState(false)
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  const filteredListings = listings.filter((listing) => {
    const listingDescription = listing.description.toLowerCase()

    return listingDescription.startsWith(search.toLowerCase())
  })

  const sortedAndFilteredListings = sort
    ? filteredListings.sort((a, b) => {
        return a[sort].localeCompare(b[sort])
      })
    : filteredListings

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/listings`)
      .then((response) => response.json())
      .then(setListings)
  }, [fetchTrigger])

  return (
    <div className="app">
      <Header setSearch={setSearch} setSort={setSort} />
      <NewForm onAddListing={toggleFetchTrigger} />
      <ListingsContainer
        handleDeleteListing={toggleFetchTrigger}
        listings={sortedAndFilteredListings}
      />
    </div>
  )
}

export default App

import React, { useState } from "react"

function ListingCard({
  onDeleteListing,
  listing: { id, image, description, location },
}) {
  const [isFavorite, setIsFavorite] = useState(true)

  const handleClick = () => setIsFavorite(!isFavorite)

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/listings/${id}`, {
      method: "DELETE",
    }).then(onDeleteListing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick={handleClick}>
        <button
          className={`emoji-button favorite ${isFavorite ? "active" : ""}`}
        >
          {isFavorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  )
}

export default ListingCard

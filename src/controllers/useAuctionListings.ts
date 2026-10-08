import { useMemo, useState } from 'react'
import { auctions } from '../models/auction'

export function useAuctionListings() {
  const [query, setQuery] = useState('')

  const filteredAuctions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return auctions
    }

    return auctions.filter((auction) =>
      [
        auction.year,
        auction.make,
        auction.model,
        auction.trim,
        auction.location,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    )
  }, [query])

  return { auctions: filteredAuctions, query, setQuery }
}

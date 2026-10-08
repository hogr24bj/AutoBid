export interface Auction {
  id: string
  year: number
  make: string
  model: string
  trim: string
  mileage: number
  location: string
  currentBid: number
  bidCount: number
  timeLeft: string
  imageUrl: string
  imageAlt: string
  featured?: boolean
}

export const auctions: Auction[] = [
  {
    id: 'porsche-911-carrera',
    year: 2021,
    make: 'Porsche',
    model: '911 Carrera',
    trim: '3.0L Coupe',
    mileage: 18420,
    location: 'Austin, TX',
    currentBid: 82400,
    bidCount: 18,
    timeLeft: '2h 18m',
    imageUrl:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Silver Porsche 911 parked on a road',
    featured: true,
  },
  {
    id: 'mercedes-amg-gt',
    year: 2020,
    make: 'Mercedes-Benz',
    model: 'AMG GT',
    trim: '4.0L V8',
    mileage: 24600,
    location: 'Scottsdale, AZ',
    currentBid: 68900,
    bidCount: 12,
    timeLeft: '5h 42m',
    imageUrl:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Black Mercedes-Benz photographed from the front',
  },
  {
    id: 'ford-bronco-badlands',
    year: 2022,
    make: 'Ford',
    model: 'Bronco Badlands',
    trim: '2.7L V6 4x4',
    mileage: 12750,
    location: 'Denver, CO',
    currentBid: 47250,
    bidCount: 9,
    timeLeft: '1d 3h',
    imageUrl:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Ford SUV on a scenic road',
  },
]

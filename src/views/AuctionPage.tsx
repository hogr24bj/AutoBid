import { useAuctionListings } from '../controllers/useAuctionListings'
import type { Auction } from '../models/auction'
import { Link } from 'react-router-dom'
import './AuctionPage.css'

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

function AuctionCard({ auction }: { auction: Auction }) {
  return (
    <article className="auction-card">
      <div className="auction-card__image-wrap">
        <img
          className="auction-card__image"
          src={auction.imageUrl}
          alt={auction.imageAlt}
          loading="lazy"
        />
        <span className="auction-card__status">
          <span aria-hidden="true" />
          Live auction
        </span>
        {auction.featured && (
          <span className="auction-card__featured">Featured</span>
        )}
      </div>

      <div className="auction-card__body">
        <div className="auction-card__title-row">
          <div>
            <p className="auction-card__eyebrow">{auction.year} · {auction.make}</p>
            <h3>{auction.model}</h3>
            <p className="auction-card__trim">{auction.trim}</p>
          </div>
          <div className="auction-card__time">
            <span>Ends in</span>
            <strong>{auction.timeLeft}</strong>
          </div>
        </div>

        <div className="auction-card__specs">
          <span>{auction.mileage.toLocaleString('en-US')} miles</span>
          <span>{auction.location}</span>
        </div>

        <div className="auction-card__footer">
          <div>
            <span className="auction-card__bid-label">Current bid</span>
            <strong className="auction-card__bid">
              {formatPrice(auction.currentBid)}
            </strong>
          </div>
          <span className="auction-card__bid-count">
            {auction.bidCount} bids
          </span>
        </div>
      </div>
    </article>
  )
}

function AuctionPage() {
  const { auctions, query, setQuery } = useAuctionListings()

  return (
    <main className="page-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="AutoBid home">
          <span className="brand__mark" aria-hidden="true">
            A
          </span>
          <span>autobid</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <a className="site-nav__link site-nav__link--active" href="#auctions">
            Auctions
          </a>
          <a className="site-nav__link" href="#how-it-works">
            How it works
          </a>
        </nav>
        <div className="header-actions">
          <span className="header-note">Find your next ride.</span>
          <Link className="header-sign-in" to="/login">Sign in <span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow"><span /> The road to your next car starts here</p>
          <h1 id="hero-title">
            Good cars.
            <br />
            <span>Great finds.</span>
          </h1>
          <p className="hero__description">
            Discover standout cars and bid with confidence. Your next favorite
            is already in the lineup.
          </p>
          <a className="hero__cta" href="#auctions">
            Explore live auctions <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__image" />
          <div className="hero__caption">
            <span>THE GOOD STUFF, ALL IN ONE PLACE</span>
            <span>01 / 03</span>
          </div>
          <div className="hero__badge">
            <span>Curated</span>
            <strong>for the drive.</strong>
          </div>
        </div>
        <div className="hero__stats" aria-label="Auction highlights">
          <div><strong>Quality</strong><span>hand-picked listings</span></div>
          <div><strong>Easy search</strong><span>find the right car</span></div>
          <div><strong>Your next</strong><span>great drive awaits</span></div>
        </div>
      </section>

      <section className="auctions-section" id="auctions" aria-labelledby="auctions-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE LINEUP</p>
            <h2 id="auctions-heading">Live auctions<span>.</span></h2>
          </div>
          <label className="search-box">
            <span className="search-box__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4.2 4.2" />
              </svg>
            </span>
            <span className="visually-hidden">Search auctions</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search make, model, location..."
            />
            <kbd>/</kbd>
          </label>
        </div>

        {auctions.length > 0 ? (
          <div className="auction-grid">
            {auctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span aria-hidden="true">⌕</span>
            <h3>No matching auctions</h3>
            <p>Try another make, model, or location.</p>
          </div>
        )}
      </section>

      <section className="how-it-works" id="how-it-works">
        <span className="how-it-works__number">01</span>
        <div>
          <p className="eyebrow">A BETTER WAY TO FIND YOUR NEXT CAR</p>
          <h2>Find it. Love it. Drive it.</h2>
        </div>
        <p>
          Browse the lineup and keep an eye on the cars that catch yours. More
          ways to bid are coming soon.
        </p>
      </section>

      <footer className="site-footer">
        <Link className="brand brand--footer" to="/" aria-label="AutoBid home">
          <span className="brand__mark" aria-hidden="true">A</span>
          <span>autobid</span>
        </Link>
        <span>Sample listings for the AutoBid preview.</span>
        <span>Made for the love of the drive.</span>
      </footer>
    </main>
  )
}

export default AuctionPage

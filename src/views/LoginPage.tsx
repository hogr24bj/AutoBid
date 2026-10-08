import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginForm } from '../controllers/useLoginForm'
import './LoginPage.css'

function LoginPage() {
  const { notice, handleSubmit } = useLoginForm()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="login-page">
      <section className="login-story" aria-label="Welcome to AutoBid">
        <Link className="brand login-story__brand" to="/" aria-label="AutoBid home">
          <span className="brand__mark" aria-hidden="true">A</span>
          <span>autobid</span>
        </Link>

        <div className="login-story__content">
          <p className="login-story__eyebrow"><span /> THE DRIVE STARTS HERE</p>
          <h1>
            Your next
            <br />
            great find
            <br />
            <span>is out there.</span>
          </h1>
          <p className="login-story__description">
            Sign in to keep your favorite cars close. The good ones don’t stay
            parked for long.
          </p>
        </div>

        <div className="login-story__image" role="img" aria-label="A car waiting for its next owner" />
        <p className="login-story__footer">MADE FOR THE LOVE OF THE DRIVE.</p>
      </section>

      <section className="login-panel" aria-labelledby="login-title">
        <Link className="login-back-link" to="/">
          <span aria-hidden="true">←</span> Back to auctions
        </Link>

        <div className="login-card">
          <div className="login-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 10h14v10H5z" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v2" />
            </svg>
          </div>
          <p className="login-card__eyebrow">WELCOME BACK</p>
          <h2 id="login-title">Sign in to AutoBid</h2>
          <p className="login-card__intro">
            Pick up where your search left off.
          </p>

          <div className="login-preview-note" role="note">
            <strong>Preview only</strong>
            <span>Sign-in isn’t connected yet. Don’t enter a real password.</span>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <div className="login-form__password-heading">
              <label htmlFor="login-password">Password</label>
            </div>
            <div className="login-form__password-field">
              <input
                id="login-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <button
                className="login-form__toggle"
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button className="login-form__submit" type="submit">
              Sign in <span aria-hidden="true">→</span>
            </button>
            <p className="login-form__notice" aria-live="polite">
              {notice}
            </p>
          </form>

          <p className="login-card__signup">
            New to AutoBid? <span>Account creation is coming soon.</span>
          </p>
        </div>

        <p className="login-panel__footer">
          Browse first, find the one.{' '}
          <Link to="/">Explore the auctions</Link>
        </p>
      </section>
    </main>
  )
}

export default LoginPage

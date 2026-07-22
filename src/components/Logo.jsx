// A small sprout mark: two leaves and a stem, kept to two tones so it
// reads clearly at 20px in the nav. Used next to the wordmark in
// Header and Footer — the only illustrated element in the system,
// everything else stays typographic and quiet by design.
export default function Logo({ className = 'w-5 h-5', tone = 'brand' }) {
  const fills =
    tone === 'reversed'
      ? { front: 'var(--color-mist-dark)', back: 'var(--color-mist)' }
      : { front: 'var(--color-field)', back: 'var(--color-canopy)' }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 21V11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 13c0-4.2 3-7 7.5-7.4C19.9 10.2 17 13 12 13Z"
        fill={fills.front}
      />
      <path
        d="M12 15c0-3.4-2.6-5.8-7.5-6.2C4.1 12.6 7.4 15.4 12 15Z"
        fill={fills.back}
      />
    </svg>
  )
}

export const BRAND_LOGO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#2563eb"/>
          <stop offset="1" stop-color="#06b6d4"/>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#g)"/>
      <path d="M22 22l-8 10 8 10" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M42 22l8 10-8 10" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="32" cy="32" r="4" fill="#fff"/>
    </svg>`
  )

export const HERO_IMAGE = 'https://picsum.photos/seed/codeatlas-hero/1200/760'

export const ABOUT_IMAGES = {
  team: 'https://picsum.photos/seed/codeatlas-team/900/600',
  desk: 'https://picsum.photos/seed/codeatlas-desk/800/560'
}

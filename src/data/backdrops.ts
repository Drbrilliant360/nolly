export interface Backdrop {
  id: string
  src: string
  width: number
  height: number
  /** What and where, for maintainers choosing a crop. Never shown to visitors. */
  subject: string
  credit: {
    photographer: string
    source: 'Unsplash' | 'Pexels'
    /** The photograph's page, which also carries its licence. */
    href: string
  }
}

/**
 * Decorative photographs from Tanzania and the Swahili coast, shown faintly behind sections.
 * All are free to use under the Unsplash and Pexels licences; credits are listed in the footer.
 */
export const backdrops = {
  darAerial: {
    id: 'dar-aerial',
    src: '/backdrops/dar-aerial.jpg',
    width: 1920,
    height: 1276,
    subject: 'Aerial view of central Dar es Salaam and the harbour',
    credit: { photographer: 'Peter Mitchell', source: 'Unsplash', href: 'https://unsplash.com/photos/lZLgqIiFHSw' },
  },
  darTowers: {
    id: 'dar-towers',
    src: '/backdrops/dar-towers.jpg',
    width: 1920,
    height: 1078,
    subject: 'Towers of the Dar es Salaam waterfront seen from the port',
    credit: { photographer: 'Omar', source: 'Unsplash', href: 'https://unsplash.com/photos/_WT7Mg1dG3w' },
  },
  kilimanjaro: {
    id: 'kilimanjaro',
    src: '/backdrops/kilimanjaro.jpg',
    width: 1920,
    height: 1285,
    subject: 'Snow-capped Kilimanjaro above the savanna',
    credit: { photographer: 'Sergey Pesterev', source: 'Unsplash', href: 'https://unsplash.com/photos/mfX814jtyro' },
  },
  zanzibarDhow: {
    id: 'zanzibar-dhow',
    src: '/backdrops/zanzibar-dhow.jpg',
    width: 1920,
    height: 1281,
    subject: 'A dhow moored off a Zanzibar beach',
    credit: { photographer: 'Odd Fellow', source: 'Unsplash', href: 'https://unsplash.com/photos/yTqkYcPegak' },
  },
  stoneTown: {
    id: 'stone-town',
    src: '/backdrops/stone-town.jpg',
    width: 1400,
    height: 2100,
    subject: 'A narrow lane in Stone Town, Zanzibar',
    credit: { photographer: 'Nichika Sakurai', source: 'Unsplash', href: 'https://unsplash.com/photos/ei3Ah7DNoxs' },
  },
  kitenge: {
    id: 'kitenge',
    src: '/backdrops/kitenge.jpg',
    width: 1400,
    height: 2100,
    subject: 'Close-up of vibrant East African kitenge fabric',
    credit: { photographer: 'josh_ dago__', source: 'Pexels', href: 'https://www.pexels.com/photo/vibrant-african-attire-in-sunlit-setting-37439166/' },
  },
} as const satisfies Record<string, Backdrop>

export const backdropCredits: Backdrop[] = Object.values(backdrops)

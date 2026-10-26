export interface Moment {
  id: string
  title: string
  /** Organiser, place and month, as published with the post. */
  meta: string
  caption: string
  src: string
  alt: string
  width: number
  height: number
  /** The original Instagram post. */
  href: string
}

/** Community and event photos published on Instagram, in the order they appear on the page. */
export const moments: Moment[] = [
  {
    id: 'yvf-speaking',
    title: 'Youth Volunteers Forum, Cohort 5',
    meta: 'Zan Change Makers · Zanzibar · October 2026',
    caption: 'Taking the mic during a session on youth leadership and community action.',
    src: '/media/yvf-speaking.jpg',
    alt: 'Restituta speaking into a microphone at a forum table, wearing a lanyard',
    width: 1280,
    height: 1600,
    href: 'https://www.instagram.com/p/De1nfozjIoV/',
  },
  {
    id: 'iwtz-wall',
    title: 'Innovation Week Tanzania 2026',
    meta: 'JNICC, Dar es Salaam · September 2026',
    caption: 'Four days of conversations on practical innovation and inclusive prosperity.',
    src: '/media/iwtz-wall.jpg',
    alt: 'Restituta standing in front of the Innovation Week Tanzania wall reading From Aspiration to Transformation',
    width: 1200,
    height: 1600,
    href: 'https://www.instagram.com/p/Dc3MJ7BjK79/',
  },
  {
    id: 'hurucon-mic',
    title: 'Huru Con 2026',
    meta: 'Liberty Sparks · March 2026',
    caption: 'Asking a question from the floor during a session on entrepreneurship and youth leadership.',
    src: '/media/hurucon-mic.jpg',
    alt: 'Restituta holding a microphone among a seated audience',
    width: 1600,
    height: 982,
    href: 'https://www.instagram.com/p/DWZ1diljP0m/',
  },
  {
    id: 'wef-stage',
    title: 'Uhuru Women’s Economic Forum, on stage',
    meta: 'Liberty Sparks · April 2026',
    caption: 'On stage during discussions on women at the frontline of economic freedom.',
    src: '/media/wef-stage.jpg',
    alt: 'Restituta seated on stage in front of the Uhuru Women’s Economic Forum backdrop',
    width: 1200,
    height: 1600,
    href: 'https://www.instagram.com/p/DXpe4cBDIcL/',
  },
  {
    id: 'yvf-poster',
    title: 'YVF 2026 delegate feature',
    meta: 'Youth Volunteers Forum 2026',
    caption: 'Official “I will attend YVF2026” feature published by Zan Change Makers.',
    src: '/media/yvf-poster.jpg',
    alt: 'Youth Volunteers Forum poster featuring Restituta Kalanga with the text I will attend YVF2026',
    width: 1120,
    height: 1400,
    href: 'https://www.instagram.com/p/DdW11kFIY00/',
  },
  {
    id: 'siptalk',
    title: 'Sip & Talk',
    meta: 'Plug Network · June 2026',
    caption: 'Listening in at a session on learning, networking and personal growth.',
    src: '/media/siptalk-audience.jpg',
    alt: 'Restituta in a theatre audience, looking towards the stage',
    width: 1600,
    height: 1600,
    href: 'https://www.instagram.com/p/DaKiDGMDAiB/',
  },
  {
    id: 'iwtz-seated',
    title: 'Innovation Week, opening sessions',
    meta: 'Opening sessions · September 2026',
    caption: 'Following the opening conversations at the convention centre.',
    src: '/media/iwtz-seated.jpg',
    alt: 'Close-up of Restituta seated in the audience at Innovation Week Tanzania',
    width: 1600,
    height: 1067,
    href: 'https://www.instagram.com/p/Dc3MJ7BjK79/',
  },
  {
    id: 'tecmn',
    title: 'Youth Voices in Ending Child Marriage',
    meta: 'TECMN · Msichana Initiative · March 2026',
    caption: 'Supporting the call that girls belong in classrooms, not in marriages.',
    src: '/media/tecmn-stage.jpg',
    alt: 'Speakers seated on a purple-lit stage under a banner about ending child marriage and promoting girls’ education',
    width: 1200,
    height: 1600,
    href: 'https://www.instagram.com/p/DWVoX34DCVF/',
  },
  {
    id: 'hurucon-stage',
    title: 'Huru Con 2026, on stage',
    meta: 'Liberty Sparks · March 2026',
    caption: 'A moment on the Huru Con stage between sessions.',
    src: '/media/hurucon-stage.jpg',
    alt: 'Restituta seated on a white sofa on the Huru Con 2026 stage',
    width: 1600,
    height: 983,
    href: 'https://www.instagram.com/p/DWZ1diljP0m/',
  },
  {
    id: 'iwtz-poster',
    title: 'IWTz 2026 delegate feature',
    meta: 'Innovation Week Tanzania 2026',
    caption: '“Let’s connect at #IWTz2026” feature published ahead of the event.',
    src: '/media/iwtz-poster.jpg',
    alt: 'Innovation Week Tanzania 2026 poster featuring Restituta Kalanga with the text Let’s connect',
    width: 1119,
    height: 1400,
    href: 'https://www.instagram.com/p/DcKuKMBs6QR/',
  },
]

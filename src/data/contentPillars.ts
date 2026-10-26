export interface ContentPillar {
  number: string
  title: string
  description: string
  icon: 'skills' | 'campaign' | 'ai' | 'growth' | 'youth'
}

export const contentPillars: ContentPillar[] = [
  {
    number: '01',
    title: 'Digital Skills Education',
    description:
      'Helping audiences discover digital tools, learning resources, and opportunities to develop practical skills.',
    icon: 'skills',
  },
  {
    number: '02',
    title: 'Promotional and Campaign Content',
    description:
      'Communicating programs, products, initiatives, and opportunities through clear promotional messages.',
    icon: 'campaign',
  },
  {
    number: '03',
    title: 'AI and Creative Technology',
    description: 'Exploring how AI and digital tools can support creative workflows and content development.',
    icon: 'ai',
  },
  {
    number: '04',
    title: 'Personal Growth and Entrepreneurship',
    description: 'Sharing ideas related to professional growth, creativity, and entrepreneurship.',
    icon: 'growth',
  },
  {
    number: '05',
    title: 'Youth Empowerment and Opportunities',
    description: 'Highlighting opportunities, initiatives, and resources relevant to young people.',
    icon: 'youth',
  },
]

export interface CalendarRow {
  day: string
  pillar: string
  format: string
  objective: string
}

/** Sample planning concept only. Not a record of previously published content. */
export const sampleCalendar: CalendarRow[] = [
  { day: 'Monday', pillar: 'Digital Skills', format: 'Carousel', objective: 'Education' },
  { day: 'Tuesday', pillar: 'Youth Opportunities', format: 'Short video', objective: 'Awareness' },
  { day: 'Wednesday', pillar: 'AI and Creative Technology', format: 'Educational post', objective: 'Engagement' },
  { day: 'Thursday', pillar: 'Promotional Content', format: 'Campaign post', objective: 'Awareness' },
  { day: 'Friday', pillar: 'Personal Growth', format: 'Story or short video', objective: 'Community building' },
]

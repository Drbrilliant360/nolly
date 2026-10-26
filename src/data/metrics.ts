export interface MetricDefinition {
  id: string
  name: string
  definition: string
  icon: 'reach' | 'impressions' | 'engagement' | 'views' | 'clicks' | 'registrations' | 'conversions'
}

export interface VerifiedMetric {
  value: string
  period: string
  source: string
  comparison?: string
}

/**
 * Measurement framework for future campaigns.
 * Values are only rendered when verified data is supplied via `verified`.
 */
export const metrics: (MetricDefinition & { verified?: VerifiedMetric })[] = [
  { id: 'reach', name: 'Reach', definition: 'The number of unique accounts that saw a piece of content.', icon: 'reach' },
  { id: 'impressions', name: 'Impressions', definition: 'How many times content was displayed, including repeat views.', icon: 'impressions' },
  { id: 'engagement', name: 'Engagement', definition: 'Likes, comments, shares and saves that show the audience responded.', icon: 'engagement' },
  { id: 'views', name: 'Video views', definition: 'How often a video was watched, and for how long.', icon: 'views' },
  { id: 'clicks', name: 'Link clicks', definition: 'Visits to a page, form or resource from the content.', icon: 'clicks' },
  { id: 'registrations', name: 'Registrations', definition: 'Sign-ups attributable to a campaign call to action.', icon: 'registrations' },
  { id: 'conversions', name: 'Conversions', definition: 'The outcome a campaign was designed to produce, defined per project.', icon: 'conversions' },
]

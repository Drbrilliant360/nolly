import {
  AiMagicIcon,
  BulbIcon,
  ChartIncreaseIcon,
  Comment01Icon,
  CursorPointer01Icon,
  EyeIcon,
  Idea01Icon,
  Megaphone01Icon,
  Mortarboard01Icon,
  PaintBrush01Icon,
  PenTool03Icon,
  PlayCircleIcon,
  Rocket01Icon,
  Target02Icon,
  TextFontIcon,
  UserGroupIcon,
  UserMultipleIcon,
  Task01Icon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import type { Service } from '../data/services'
import type { ContentPillar } from '../data/contentPillars'
import type { MetricDefinition } from '../data/metrics'

export const serviceIcons: Record<Service['icon'], IconSvgElement> = {
  idea: Idea01Icon,
  megaphone: Megaphone01Icon,
  caption: TextFontIcon,
  script: PenTool03Icon,
  design: PaintBrush01Icon,
  ai: AiMagicIcon,
}

export const pillarIcons: Record<ContentPillar['icon'], IconSvgElement> = {
  skills: Mortarboard01Icon,
  campaign: Megaphone01Icon,
  ai: AiMagicIcon,
  growth: Rocket01Icon,
  youth: UserGroupIcon,
}

export const metricIcons: Record<MetricDefinition['icon'], IconSvgElement> = {
  reach: UserMultipleIcon,
  impressions: EyeIcon,
  engagement: Comment01Icon,
  views: PlayCircleIcon,
  clicks: CursorPointer01Icon,
  registrations: Task01Icon,
  conversions: Target02Icon,
}

export { BulbIcon, ChartIncreaseIcon }

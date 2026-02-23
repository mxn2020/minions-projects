/**
 * @module @minions-projects/sdk/schemas
 * Custom MinionType schemas for Minions Projects.
 */

import type { MinionType } from 'minions-sdk';

export const projectType: MinionType = {
  id: 'projects-project',
  name: 'Project',
  slug: 'project',
  description: 'A project with its variant, goals, and current status.',
  icon: '🏗️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'variant', type: 'select', label: 'variant' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'ownerId', type: 'string', label: 'ownerId' },
    { name: 'goals', type: 'string', label: 'goals' },
    { name: 'startDate', type: 'string', label: 'startDate' },
    { name: 'targetEndDate', type: 'string', label: 'targetEndDate' },
    { name: 'completedAt', type: 'string', label: 'completedAt' },
    { name: 'tags', type: 'string', label: 'tags' },
  ],
};

export const projectsummaryType: MinionType = {
  id: 'projects-project-summary',
  name: 'Project summary',
  slug: 'project-summary',
  description: 'A periodic summary of project health and progress.',
  icon: '📊',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'periodStart', type: 'string', label: 'periodStart' },
    { name: 'periodEnd', type: 'string', label: 'periodEnd' },
    { name: 'health', type: 'select', label: 'health' },
    { name: 'completionPercent', type: 'number', label: 'completionPercent' },
    { name: 'blockers', type: 'string', label: 'blockers' },
    { name: 'highlights', type: 'string', label: 'highlights' },
    { name: 'generatedAt', type: 'string', label: 'generatedAt' },
  ],
};

export const customTypes: MinionType[] = [
  projectType,
  projectsummaryType,
];


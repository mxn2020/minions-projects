"""
Minions Projects SDK — Type Schemas
Custom MinionType schemas for Minions Projects.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

project_type = MinionType(
    id="projects-project",
    name="Project",
    slug="project",
    description="A project with its variant, goals, and current status.",
    icon="🏗️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="variant", type="select", label="variant"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="ownerId", type="string", label="ownerId"),
        FieldDefinition(name="goals", type="string", label="goals"),
        FieldDefinition(name="startDate", type="string", label="startDate"),
        FieldDefinition(name="targetEndDate", type="string", label="targetEndDate"),
        FieldDefinition(name="completedAt", type="string", label="completedAt"),
        FieldDefinition(name="tags", type="string", label="tags"),
    ],
)

project_summary_type = MinionType(
    id="projects-project-summary",
    name="Project summary",
    slug="project-summary",
    description="A periodic summary of project health and progress.",
    icon="📊",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="periodStart", type="string", label="periodStart"),
        FieldDefinition(name="periodEnd", type="string", label="periodEnd"),
        FieldDefinition(name="health", type="select", label="health"),
        FieldDefinition(name="completionPercent", type="number", label="completionPercent"),
        FieldDefinition(name="blockers", type="string", label="blockers"),
        FieldDefinition(name="highlights", type="string", label="highlights"),
        FieldDefinition(name="generatedAt", type="string", label="generatedAt"),
    ],
)

custom_types: list[MinionType] = [
    project_type,
    project_summary_type,
]


"""
Minions Projects Python SDK

Project definitions, variants, goals, status, and ownership
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Projects.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *

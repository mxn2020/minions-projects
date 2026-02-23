/**
 * Minions Projects SDK
 *
 * Project definitions, variants, goals, status, and ownership
 *
 * @module @minions-projects/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Projects.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';

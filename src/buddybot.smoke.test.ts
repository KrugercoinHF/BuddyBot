import { describe, expect, it } from 'vitest';

describe('BuddyBot test runner', () => {
  it('runs the configured Vitest environment', () => {
    expect(typeof document).toBe('object');
    expect(document.createElement('main').tagName).toBe('MAIN');
  });
});

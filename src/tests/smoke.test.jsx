import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';

describe('Calc-Hub smoke tests', () => {
  it('sanity: true is true', () => {
    expect(true).toBe(true);
  });

  it('renders a simple element using testing-library', () => {
    const { getByText } = render(<div>Calc-Hub</div>);
    expect(getByText('Calc-Hub')).toBeDefined();
  });
});

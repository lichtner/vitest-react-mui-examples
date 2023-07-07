import { describe, expect, it } from 'vitest';
import Static from './Static';
import { render, screen } from './test/testUtils';

describe('Static', () => {
  it('show static', () => {
    render(<Static />)
    expect(screen.getByText('Static')).toBeInTheDocument()
  })
})
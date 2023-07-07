import { describe, expect, it } from 'vitest';
import UserId from './UserId';
import { render, screen, userEvent } from './test/testUtils';

describe('User Id', () => {
  it('show user by id', async () => {
    render(<UserId />)
    const input = screen.getByRole('id')
    expect(input).toBeDefined()
    await userEvent.type(input, '2')
    expect(input).toHaveProperty('value', '2')
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(screen.getByText('mockuser2')).toBeDefined()
  })
})
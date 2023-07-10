import { describe, expect, it } from 'vitest';
import MuiUserId from './MuiUserId';
import { user1 } from './mocks/handlers';
import { render, screen, userEvent } from './test/testUtils';

describe('Mui User Id', () => {
  it('show mui user by id', async () => {
    render(<MuiUserId />)
    const input = screen.getByTestId('mui-id').querySelector('input')
    expect(input).toBeDefined()
    await userEvent.type(input, '1')
    expect(input).toHaveProperty('value', '1')
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(screen.getByText(user1.name)).toBeDefined()
  })
})
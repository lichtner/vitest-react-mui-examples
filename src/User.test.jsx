import { describe, expect, it } from 'vitest';
import User from './User';
import { render, screen, waitForElementToBeRemoved } from './test/testUtils';

describe('User', () => {
  it('show user', async () => {
    render(<User />)
    await waitForElementToBeRemoved(() => screen.queryByText('loading...'))
    expect(screen.getByText('mockuser')).toBeDefined()
  })
})
import { describe, expect, it } from 'vitest';
import User1 from './User1';
import { render, screen, waitForElementToBeRemoved } from './test/testUtils';

describe('User 1', () => {
  it('show user 1', async () => {
    render(<User1 />)
    await waitForElementToBeRemoved(() => screen.queryByText('loading...'))
    expect(screen.getByText('mockuser1')).toBeDefined()
  })
})
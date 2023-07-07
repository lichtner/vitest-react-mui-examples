import { describe, expect, it } from 'vitest';
import User2 from './User2';
import { user2 } from './mocks/handlers';
import { render, screen, waitForElementToBeRemoved } from './test/testUtils';

describe('User 2', () => {
  it('show user 2', async () => {
    render(<User2 />)
    await waitForElementToBeRemoved(() => screen.queryByText('loading...'))
    expect(screen.getByText(user2.name)).toBeDefined()
  })
})
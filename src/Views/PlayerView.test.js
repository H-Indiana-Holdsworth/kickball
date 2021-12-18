import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import PlayerView from './PlayerView';

test('renders welcome message', () => {
  const container = render(
    <MemoryRouter>
      <PlayerView />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

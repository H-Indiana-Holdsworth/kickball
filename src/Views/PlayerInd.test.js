import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import PlayerInd from './PlayerInd';

test('renders player details', () => {
  const container = render(
    <MemoryRouter>
      <PlayerInd match={{ params: { id: '1' } }} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import TeamInd from './PlayerInd';

test('renders player details', () => {
  const container = render(
    <MemoryRouter>
      <TeamInd match={{ params: { id: '1' } }} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

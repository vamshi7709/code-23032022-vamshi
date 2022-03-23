import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Main from './components/main';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/penthouses/i);
  expect(linkElement).toBeInTheDocument();

  // const exploreElement = screen.getByText(/Explore/i);

  // expect(exploreElement).toBeCalledTimes(2);

});

test('renders explore', () => {
  render(<App />);

  const exploreElement = screen.getAllByText(/Explore/i);

  expect(exploreElement.length).toEqual(3);

});



/* test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
 */

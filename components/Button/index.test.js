import Button from './index';
import { fireEvent, render } from '@testing-library/react';

const makeSut = (props) => {
	return render(
		<Button onClick={jest.fn()} {...props}>
			TEST_BUTTON
		</Button>
	);
};

describe('<Button />', () => {
	test('Should call onClick successfully', () => {
		const spy = jest.fn();

		const { getByText } = makeSut({ onClick: spy });

		fireEvent.click(getByText(/TEST_BUTTON/));

		expect(spy).toHaveBeenCalled();
	});
});

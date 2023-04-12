import { render, screen } from '@testing-library/react';
import Home from '@/app/(home)/page';
import '@testing-library/jest-dom';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />);

		const heading = screen.getByRole('heading', {
			name: /Weather App/i,
		});

		expect(heading).toBeInTheDocument();
	});
});

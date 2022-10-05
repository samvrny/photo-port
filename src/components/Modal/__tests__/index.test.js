import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum',
    index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />    
        )
    })

    it('matches snapshot', () => {
        const {asFragment } = render(
            <Modal
                onClose={mockToggleModal}
                currentPhoto={currentPhoto}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    })
})


describe('Click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(
            <Modal
                onClose={mockToggleModal}
                currentPhoto={currentPhoto}
            />
        );

        fireEvent.click(getByText('Close'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})
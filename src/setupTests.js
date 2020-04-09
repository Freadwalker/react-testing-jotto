import '@testing-library/jest-dom/extend-expect';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({adapter: new EnzymeAdapter()});
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/form/form.js';


describe('<Form/>', () => {
    it('is alive at application start', () => {
      const form = shallow(<Form />);
      expect(form.find('main').exists()).toBeTruthy();
    });
    it('method GET', () => {
      const form = mount(<Form />);
      const button = form.find('#get');
      button.simulate('click');
      expect(form.state('method')).toBe('GET');
    });
    it('method POST', () => {
        const form = mount(<Form />);
        const button = form.find('#post');
        button.simulate('click');
        expect(form.state('method')).toBe('POST');
      });
      it('method PUT', () => {
        const form = mount(<Form />);
        const button = form.find('#put');
        button.simulate('click');
        expect(form.state('method')).toBe('PUT');
      });
      it('method DELETE', () => {
        const form = mount(<Form />);
        const button = form.find('#delete');
        button.simulate('click');
        expect(form.state('method')).toBe('DELETE');
      });
    it('Renders correctly', () => {
      const tree = renderer.create(<Form />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
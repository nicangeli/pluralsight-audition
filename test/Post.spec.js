import React from 'react'
import { expect } from 'chai'
import TestUtils from 'react-test-utils'
import { shallow } from 'enzyme'
import Post from '../src/Post'

describe('<Post />', () => {
	it('should render as a h1', () => {
		const wrapper = shallow(<Post />)
		expect(wrapper.find('h1').length).to.equal(1)
	});
	it('should render title', () => {
		const wrapper = shallow(<Post />);
		expect(wrapper.find('h1').text()).to.equal('Hello World');
	});
	it('should render title as Hello World', () => {
		const wrapper = shallow(<Post title="Hello World" />);
		expect(wrapper.find('h1').text()).to.equal('Hello World');
	});
	it('should render title as Foo', () => {
		const wrapper = shallow(<Post title='Foo' />);
		expect(wrapper.find('h1').text()).to.equal('Foo');
	});
	describe('button', () => {
		it('should render a button per <Post>', () => {
			const wrapper = shallow(<Post title='Bar' />);
			expect(wrapper.find('button').length).to.equal(1);
		});
		it('should be unliked to start', () => {
			const wrapper = shallow(<Post title='Foo' />);
			expect(wrapper.state().liked).to.equal(false);
		});
		it('should toggle state when clicked', () => {
			const wrapper = shallow(<Post />);
			wrapper.find('button').simulate('click');
			expect(wrapper.state().liked).to.equal(true);	
		})
		it('should render like initially', () => {
			const wrapper = shallow(<Post />);
			expect(wrapper.find('button').text()).to.equal('Like');
		});
		it('should render unlike when already liked', () => {
			const wrapper = shallow(<Post />);
			wrapper.find('button').simulate('click');
			expect(wrapper.find('button').text()).to.equal('Unlike');	
		});	
	})
});

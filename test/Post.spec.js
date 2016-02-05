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
	})
});

/**
 * @jest-environment jsdom
 */
import {mount} from '@vue/test-utils';
import footer from './footer';

describe('<v-footer/>', () => {
    const wrapper = mount(footer);
    it("check the footer", () => {
        expect(wrapper.find('h1').text()).toEqual('这是一个高仿的页面')
    });
});
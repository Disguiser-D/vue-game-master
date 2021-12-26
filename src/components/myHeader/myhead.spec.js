/**
 * @jest-environment jsdom
 */
import {mount} from '@vue/test-utils';
import myhead from './myhead';

describe('<v-footer/>', () => {
    const wrapper = mount(myhead);
    it("check the myhead_login_but", () => {
        expect(wrapper.find('el-button').text()).toEqual('登出')
    });
});
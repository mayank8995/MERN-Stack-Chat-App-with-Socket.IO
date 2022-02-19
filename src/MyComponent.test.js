import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MyComponent from './MyComponent';
Enzyme.configure({adapter: new Adapter()})
describe('MyComponet component',()=>{

    it('First test case',()=>{
        const foo = false;
        expect(foo).toBe(false)
    })

    it('should show some text',()=>{
        const wrapper = shallow(<MyComponent />);
        const text = wrapper.find('p')
        expect(text.text()).toBe('This is some text')
    })
})
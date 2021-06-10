import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router";
import { SearchScreen } from './../../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen />', () => {

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');           
    });

    test('debe de mostrarse a batman y el input con el valor del qurey string', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar un error si no se encuentra al hero', () => {
        
        //Pendiente

    });

    test('debe de llamar el push del history', () => {
        
        const historyMock = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={() => <SearchScreen history={historyMock}/>}/>
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {name:'searchText', value:'batman'}
        });

        wrapper.find('form').prop('onSubmit')({preventDefault(){}});

        expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`);
    });

    
    
    

    
})

import { authReducer } from '@/auth';
import { types } from '@/auth/types';


describe('Pruebas en el authReducer', () => { 
    const initialState = { logged: false, user: null };

    const user = { id: 'ABC-123', name: 'nikodev'}; 

    const loginAction = { type: types.login, payload: user }
    const logoutAction = { type: types.logout }

    test('Should return default state', () => { 
        const state = authReducer(initialState, {});

        expect(state).toBe(initialState)
    })   

    test('should called login action and set user', () => { 
        const state = authReducer(initialState, loginAction);

        expect(state.logged).toBeTruthy();
        expect(state.user).toBeTruthy();
     })

    test('should called logout action and reset state', () => { 
        const state = authReducer(initialState, loginAction);

        expect(state.logged).toBeTruthy();
        
        const stateUpdated = authReducer(state, {type: types.logout});

        expect(stateUpdated.logged).toBeFalsy()
     })

    test('should called logout action and reset state 2', () => { 
        const loggedState = { logged: true, user }
        const state = authReducer(loggedState, logoutAction);

        expect(state.logged).toBeFalsy()
     })
})
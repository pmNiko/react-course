const { types } = require("@/auth/types")

describe('Testing types of auth', () => { 
    test('should match types', () => { 
        const typesDef = {
            login:  '[Auth] Login',
            logout: '[Auth] Logout'
        }

        expect(types).toEqual(typesDef)
     })
 })
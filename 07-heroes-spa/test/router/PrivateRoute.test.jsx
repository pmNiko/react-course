import { AuthContext } from "@/auth";
import { PrivateRoute } from "@/router/PrivateRoute";
import { PublicRoute } from "@/router/PublicRoute";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Testing on <PrivateRoute/> from router', () => { 
    test('should show children if is logged', () => { 
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true, 
            user: {
                id: 'ABC-123', 
                name: 'Nikodev'
            }
        };  

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/dc']} >                  
                    <PrivateRoute>
                        <p>This is a private route</p>
                    </PrivateRoute>        
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('This is a private route')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/dc")
     })

    test('should navigate to login page if not logged', () => { 
        const contextValue = {logged: false};

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/']} >
                    <Routes>
                        <Route path="/" element={
                            <PrivateRoute>
                                <p>This is a private route</p>
                            </PrivateRoute>
                        }/>

                        <Route path="login" element={<h1>Login page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Login page')).toBeTruthy()
     })
 })
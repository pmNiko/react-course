import { AuthContext } from "@/auth";
import { PublicRoute } from "@/router/PublicRoute";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Testing on <PublicRoute/> from router', () => { 
    test('should show children if not is logged', () => { 
        const contextValue = {logged: false};

        render(
            <AuthContext.Provider value={contextValue} >
                <PublicRoute>
                    <p>This is a public route</p>
                </PublicRoute>
            </AuthContext.Provider>
        )
        // screen.debug()

        expect(screen.getByText('This is a public route')).toBeTruthy()
     })

    test('should navigate to marvel page if is logged', () => { 
        const contextValue = {logged: true, user: {id: 'ABC-123', name: 'Nikodev'}};

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/login']} >
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <p>This is a public route</p>
                            </PublicRoute>} 
                        />
                         
                        <Route path="marvel" element={<h1>Marvel Page</h1>} />
                    </Routes>                    
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug()
        expect(screen.getByText('Marvel Page')).toBeTruthy()
     })
 })
import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useUiStore } from '../../src/hooks/useUiStore';
import { uiSlice } from '../../src/store/ui/uiSlice';
import { act } from 'react';

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
    preloadedState: {
      ui: { ...initialState },
    },
  });
};

describe('Pruebas en el hook "useUiStore"', () => {
  test('Debe de regrear los valores por defecto', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(useUiStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function),
      onToggleDateModal: expect.any(Function),
    });
  });

  test('"openDateModal" debe de colocar isDateModalOpen en true', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(useUiStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    act(result.current.openDateModal);

    expect(result.current.isDateModalOpen).toBeTruthy();
  });

  test('"closeDateModal" debe de colocar isDateModalOpen en false', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(useUiStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    act(result.current.closeDateModal);

    expect(result.current.isDateModalOpen).toBeFalsy();
  });

  test('"onToggleDateModal" debe de cambiar isDateModalOpen de estado', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(useUiStore, {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    act(result.current.onToggleDateModal);

    expect(result.current.isDateModalOpen).toBeTruthy();

    act(result.current.onToggleDateModal);

    expect(result.current.isDateModalOpen).toBeFalsy();
  });
});

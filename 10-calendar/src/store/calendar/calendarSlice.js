import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  isLoadingEvents: true,
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onLoadEvents: (state, action) => {
      state.isLoadingEvents = false;
      // state.events = action.payload;
      action.payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },
    setActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
    onAddNewEvent: (state, action) => {
      state.events.push(action.payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, action) => {
      state.events = state.events.map((event) => {
        if (event.id === action.payload.id) {
          return action.payload;
        }
        return event;
      });
      state.activeEvent = null;
    },
    onUpdateEvent: (state, action) => {
      state.events = state.events.map((event) => {
        if (event.id === action.payload.id) {
          return action.payload;
        }
        return event;
      });
      state.activeEvent = null;
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },
    onLogoutCalendar: (state) => {
      state.events = [];
      state.isLoadingEvents = true;
      state.activeEvent = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onLoadEvents,
  setActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLogoutCalendar,
} = calendarSlice.actions;

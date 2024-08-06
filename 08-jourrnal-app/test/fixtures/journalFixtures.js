export const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
};

export const newNote = {
  id: '1234acb908',
  title: 'This is a new note',
  body: 'Should testing all my applications',
  date: new Date(),
  imageUrls: [
    'https://res.cloudinary.com/dbm9weddu/image/upload/v1722296364/imjtg7enlmtr1vhpau4c.jpg',
    'https://res.cloudinary.com/dbm9weddu/image/upload/v1722296364/upzzk2afvknfwrhcnwmr.jpg',
  ],
};

export const newNoteTwo = {
  id: '999ABC000',
  title: 'This is other note',
  body: 'I walk to the beach',
  date: new Date(),
  imageUrls: [
    'https://res.cloudinary.com/dbm9weddu/image/upload/v1722296364/imjtg7enlmtr1vhpau4c.jpg',
  ],
};

export const initialStatePhotos = {
  isSaving: false,
  messageSaved: '',
  notes: [newNote],
  active: newNote,
};

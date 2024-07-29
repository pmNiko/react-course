const optionsDefault = {
  day: 'numeric',
  month: 'long',
  // weekday: 'long',
  year: 'numeric',
};

export const dateFormat = (date, options = optionsDefault) =>
  new Date(date).toLocaleDateString('es-ES', options);

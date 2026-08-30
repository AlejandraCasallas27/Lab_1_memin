const EVENTS = [
  { id: 'event1', type: 'aviso corto', scheduledTime: 300 },
  { id: 'event2', type: 'aviso largo', scheduledTime: 900 },
  { id: 'event3', type: 'aviso corto', scheduledTime: 250 },
  { id: 'event4', type: 'aviso largo', scheduledTime: 700 },
  { id: 'event5', type: 'aviso corto', scheduledTime: 250 },
  { id: 'event6', type: 'aviso largo', scheduledTime: 800 },
  { id: 'event7', type: 'aviso corto', scheduledTime: 150 },
  { id: 'event8', type: 'aviso largo', scheduledTime: 950 },
];

// Umbral (en milisegundos)
const DEVIATION_THRESHOLD = 400;

module.exports = { EVENTS, DEVIATION_THRESHOLD };
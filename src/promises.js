const { EVENTS, DEVIATION_THRESHOLD } = require('./config');
const { processResults } = require('./process');
const { triggerAlert } = require('./threshold');

const loggedEvents = [];
const startTime = Date.now();

triggerAlert(EVENTS[0], startTime, loggedEvents, 'promises')
  .then(() => triggerAlert(EVENTS[1], startTime, loggedEvents, 'promises'))
  .then(() => triggerAlert(EVENTS[2], startTime, loggedEvents, 'promises'))
  .then(() => triggerAlert(EVENTS[3], startTime, loggedEvents, 'promises'))
  .then(() => triggerAlert(EVENTS[4], startTime, loggedEvents, 'promises'))
  .then(() => triggerAlert(EVENTS[5], startTime, loggedEvents, 'promises'))
  .then(() => triggerAlert(EVENTS[6], startTime, loggedEvents, 'promises'))
  .then(() => triggerAlert(EVENTS[7], startTime, loggedEvents, 'promises'))
  .then(() => {
    console.log('\n--- Todos los avisos fueron disparados (promises) ---');
    console.log(processResults(loggedEvents, DEVIATION_THRESHOLD));
  })
  .catch((error) => {
    console.error('Ocurrió un error en la cadena de promesas:', error.message);
  });
const { EVENTS, DEVIATION_THRESHOLD } = require('./config');
const { processResults } = require('./process');
const { triggerAlert } = require('./threshold');

const loggedEvents = [];
const startTime = Date.now();

async function runSimulator() {
  try {
    for (const eventData of EVENTS) {
      await triggerAlert(eventData, startTime, loggedEvents, 'async/await');
    }

    console.log('Todos los avisos fueron disparados (async/await)');
    console.log(processResults(loggedEvents, DEVIATION_THRESHOLD));
  } catch (error) {
    console.error('Ocurrió un error en el simulador async/await:', error.message);
  }
}

runSimulator();
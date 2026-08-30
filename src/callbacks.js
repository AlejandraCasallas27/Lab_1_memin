const { EVENTS, DEVIATION_THRESHOLD } = require('./config');
const { processResults } = require('./process');

const loggedEvents = [];
const startTime = Date.now();

function logEvent(eventData) {
  const event = {
    id: eventData.id,
    type: eventData.type,
    scheduledTime: eventData.scheduledTime,
    actualTime: Date.now() - startTime,
  };

  loggedEvents.push(event);
  console.log(
    `[callbacks] ${event.id} (${event.type}) - programado: ${event.scheduledTime}ms, real: ${event.actualTime}ms`
  );
}

function showFinalResults() {
  console.log('Todos los avisos fueron disparados (callbacks)');
  console.log(processResults(loggedEvents, DEVIATION_THRESHOLD));
}

setTimeout(() => {
  logEvent(EVENTS[0]);

  setTimeout(() => {
    logEvent(EVENTS[1]);

    setTimeout(() => {
      logEvent(EVENTS[2]);

      setTimeout(() => {
        logEvent(EVENTS[3]);

        setTimeout(() => {
          logEvent(EVENTS[4]);

          setTimeout(() => {
            logEvent(EVENTS[5]);

            setTimeout(() => {
              logEvent(EVENTS[6]);

              setTimeout(() => {
                logEvent(EVENTS[7]);
                showFinalResults();
              }, EVENTS[7].scheduledTime);
            }, EVENTS[6].scheduledTime);
          }, EVENTS[5].scheduledTime);
        }, EVENTS[4].scheduledTime);
      }, EVENTS[3].scheduledTime);
    }, EVENTS[2].scheduledTime);
  }, EVENTS[1].scheduledTime);
}, EVENTS[0].scheduledTime);
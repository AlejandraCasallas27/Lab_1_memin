function triggerAlert(eventData, startTime, loggedEvents, label) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const event = {
        id: eventData.id,
        type: eventData.type,
        scheduledTime: eventData.scheduledTime,
        actualTime: Date.now() - startTime,
      };

      loggedEvents.push(event);
      console.log(
        `[${label}] ${event.id} (${event.type}) - programado: ${event.scheduledTime}ms, real: ${event.actualTime}ms`
      );

      resolve(event);
    }, eventData.scheduledTime);
  });
}

module.exports = { triggerAlert };
function calculateAverageLatency(events) {
  const totalDeviation = events.reduce((accumulated, event) => {
    return accumulated + (event.actualTime - event.scheduledTime);
  }, 0);

  return totalDeviation / events.length;
}

function getHighDeviationIds(events, threshold) {
  return events
    .filter((event) => Math.abs(event.actualTime - event.scheduledTime) > threshold)
    .map((event) => event.id);
}

function findFirstOutOfOrderEvent(events) {
  const scheduledOrder = [...events].sort((a, b) => a.scheduledTime - b.scheduledTime);

  return events.find((event, actualIndex) => {
    const expectedIndex = scheduledOrder.findIndex((e) => e.id === event.id);
    return expectedIndex !== actualIndex;
  });
}

function processResults(events, threshold) {
  return {
    averageLatency: calculateAverageLatency(events),
    highDeviationIds: getHighDeviationIds(events, threshold),
    firstOutOfOrderEvent: findFirstOutOfOrderEvent(events),
  };
}

module.exports = {
  calculateAverageLatency,
  getHighDeviationIds,
  findFirstOutOfOrderEvent,
  processResults,
};
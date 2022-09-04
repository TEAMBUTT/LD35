const callbacks = [];

export function onMessage(callback) {
  callbacks.push(callback);
}

export function addMessage(message) {
  callbacks.forEach((callback) => callback(message));
}

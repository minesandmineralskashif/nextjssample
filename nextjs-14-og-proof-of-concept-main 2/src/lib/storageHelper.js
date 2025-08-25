import 'client-only';

export function getLocalStorage(key, defaultValue) {
  if (typeof window === 'undefined') {
    return defaultValue;
  }
  
  const stickyValue = localStorage.getItem(key);

  return (stickyValue !== null && stickyValue !== 'undefined')
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorage(key, value) {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.setItem(key, JSON.stringify(value));
}

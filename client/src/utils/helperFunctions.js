// stores token in session storage
export function setToken(userToken) {
  return sessionStorage.setItem('token', userToken);
}

// gets token from session storage
export function getToken() {
  return sessionStorage.getItem('token');
}

// shortens a string with ellipsis (...)
export function trimmedContent(string) {
  const maxLength = 150; // maximum number of characters to extract
  let trimmedString = string.substr(0, maxLength);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
  );
  return `${trimmedString}...`;
}

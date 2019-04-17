const URLify1 = (str) => {
  return str ? str.split(' ').join('%20') : str;
}

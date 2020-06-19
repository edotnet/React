const concatClsx = (...classNames) => {
  return classNames.filter(q => q).join(' ');
}

export default concatClsx;
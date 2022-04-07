exports.getTransformedName = (person) => {
  const { lastName, firstName } = person;
  return `${lastName}, ${firstName.charAt(0)}.`;
};

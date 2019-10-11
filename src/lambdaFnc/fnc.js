// The goals of this function are twofold:
// * Provide a way to generate a string guaranteed to be unique when compared
// to other strings generated by this functions.
// * Make the string complex enough that it is highly unlikely to be
// accidentally duplicated by hand (this is key if you're using `ID`
// as a private/protected name on an object).
//
// Use:
// let privateName= ID();
// let o= {'public': 'foo'};
// o[privateName]= 'bar';
const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

export default ID;

export const isEmptyObject = obj => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};

const allowDrop = event => {
  event.preventDefault();
};

const drag = event => {
  event.dataTransfer.dropEffect= 'move';
};

const drop = event => {};

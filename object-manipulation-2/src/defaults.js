/* exported defaults */
/* there are two objects: source and target. if a property of the source object is not a property in the target object, add
the property and value to the target object. Create a conditional that checks every key of source and checks to see if it is located in one of the keys of the target object.
if the source property is not in the target object, create a property of source within target object. */

function defaults(target, source) {
  for (const property in source) {
    if (property in source !== property in target) {
      target[property] = source[property];
    }
  }
}

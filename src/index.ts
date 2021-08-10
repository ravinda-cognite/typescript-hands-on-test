/**
 * ====================================================
 * Answer to the qestions in comments in the next line.
 * Prefer ES6 arrow functions if possible
 * ====================================================
 */

/**
 * 1. Write a function that acceps a number and a string as arguments
 * and log them.
 */

/**
 * 2. Write a functioon that take two numbers and returned sum of those.
 * Second number should be optional and be dafaulted to 5
 */

/**
 * 3. Fix the error in following function by changing only line 23
 */

const logLength = (value: unknown) => {
  console.log(value.length);
};
console.log(logLength("Hello World"));

/**
 * 4. Update the function so it accepts either string or number
 * as argument and log it
 */

const logIdNumber = () => {
  // ...
};

/**
 * 5. Create a interface `Vehicle` with properties
 * wheels(number), model(string)
 */

/**
 * 6. Create a Car interface inheriting Vehicle and new property
 * poweredBy ( string ) and optional ludicrous ( boolean )
 */

/**
 * 7. Do same for above (6,7) using types
 */

/**
 * 8. Update following type with property model which can be
 * only MODEL_3, MODEL_S, MODEL_X and MODEL_Y
 */
type Tesla = {
  color: string;
};

/**
 * 9. Create a enum for models of above question.
 */

/**
 * 10. Write a function that takes a generic argument T logs it
 * return without erasing type
 */

/**
 * 11. Follwing enum 'Modules' represent modules of a js app
 * and 'Config` represent configuration of a module
 * Define a type 'ModuleConfig` where object key only be one
 * of the modules and value is Config Type
 */

enum Modules {
  STUDENTS,
  COURSES
}

type Config = {
  id: string;
  //.....
};

/**
 * 12. Refer to the folling type, what does it do
 */

type TypeA<T extends object, K extends keyof T = keyof T> = T[K] extends unknown
  ? T[K]
  : never;

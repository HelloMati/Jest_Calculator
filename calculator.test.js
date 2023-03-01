const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");


describe("sum", () => {

  test('I can add two small positive numbers. Size matters not...For my ally is the Force, and a powerful ally it is.', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('you can add two large positive numbers. Live long and prosper', () => {
    expected = 1000;
    actual = sum(999, 1);
    expect(actual).toBe(expected);
  });

  test('It is possible to commit no mistakes and still lose. That is not a weakness. That is life and is what happens when you add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test("The enemy of my enemy is my friend, you can add positive and negative numbers", () => {
    expected = 1;
    actual = sum(5, -4);
    expect(actual).toBe(expected);
  });

  test("The only constant is change except when you add zero", () => {
    expected = 5;
    actual = sum(5, 0);
    expect(actual).toBe(expected);
  });

  test("I'm sorry, Dave. I'm afraid I can't add a non-number", () => {
    expected = NaN;
    actual = sum(5, "Not a Number. Shh!");
    expect(actual).toBe(expected);
  });

  test("I cannot add two non-numbers no matter what. From hell's heart I stab at thee; for hate's sake I spit my last breath at thee", () => {
    expected = NaN;
    actual = sum(NaN, NaN);
    expect(actual).toBe(expected);
  });
});


describe('subtract', () => {

  test("I'm a doctor, not a mathematician, but even I know you can subtract two small positive numbers", () => {
    expected = 5;
    actual = subtract(8, 3);
    expect(actual).toBe(expected);
  });

  test('I am your father. Oh! and I can subtract two large positive numbers', () => {
    expected = 1;
    actual = subtract(999, 998);
    expect(actual).toBe(expected);
  });

  test('The truth is out there and so is the fact you can subtract two negative numbers', () => {
    expected = 3;
    actual = subtract(-2, -5);
    expect(actual).toBe(expected);
  });

  test("I don't believe in the no-win scenario, however, the fact I can subtract zero changes nothing", () => {
    expected = -1;
    actual = subtract(-1, 0);
    expect(actual).toBe(expected);
  });
});


describe('multiply', () => {

  test('Warp factor two, Mr Sulu, I can multiply two small positive numbers', () => {
    expected = 54;
    actual = multiply(6, 9);
    expect(actual).toBe(expected);
  });

  test('Mr Sulu, maximum warp. I can multiply two large positive numbers', () => {
    expected = 1000000;
    actual = multiply(1000, 1000);
    expect(actual).toBe(expected);
  });

  test('Fascinating, I can multiply two negative numbers', () => {
    expected = 54;
    actual = multiply(-6, -9);
    expect(actual).toBe(expected);
  });

  test("I'm giving her all she's got, Captain, but, despite the fact I can multiply by zero, we're going nowhere", () => {
    expected = 0;
    actual = multiply(5, 0);
    expect(actual).toBe(expected);
  });
});


describe('divide', () => {

  test('can I divide two small positive numbers? Aye, sir, calculating now', () => {
    expected = 4;
    actual = divide(8, 2);
    expect(actual).toBe(expected);
  });

  test('Divert power to shields! Similarly, you can divide two large positive numbers', () => {
    expected = 1000;
    actual = divide(1000000, 1000);
    expect(actual).toBe(expected);
  });

  test('Great Scott! I can divide two negative numbers', () => {
    expected = 4;
    actual = divide(-8, -2);
    expect(actual).toBe(expected);
  });

test('I cannot change the laws of physics! Thus, I cannot divide zero', () => {
    expected = Infinity
    actual = divide(5, 0);
    expect(actual).toBe(expected);
  });
});


describe('modulus', () => {

  test("I'm a doctor, not a mathematician, but even I know I can find the modulus of two small positive numbers.  Again McCoy?  Yes again.", () => {
    expected = 4;
    actual = modulus(12, 8);
    expect(actual).toBe(expected);
  });

  test("Captain's log, stardate 47634.44. Upon testing the functions of the ship's calculator module, I was reminded that one can find the modulus of two large positive numbers", () => {
    expected = 10000;
    actual = modulus(10000, 32000);
    expect(actual).toBe(expected);
  });

  test('can find the modulus of two negative numbers. Negative, Captain', () => {
    expected = -4;
    actual = modulus(-10, -6);
    expect(actual).toBe(expected);
  });

  test('Resistance is futile. You cannot divide modulus by zero', () => {
    expected = NaN
    actual = modulus(50, 0);
    expect(actual).toBeNaN();
  });
});


describe('even', () => {

  test('To boldly go where I can find if a small positive number is even', () => {
    expected = true;
    actual = even(4);
    expect(actual).toBe(expected);
  });

  test('"The logical course of action is often the most difficult one. Not so much here. I can work out if a small positive number is not even', () => {
    expected = false;
    actual = even(1);
    expect(actual).toBe(expected);
  });

  test('"Odd or even. There is no balance in between, like the Force, you must choose. I can find if a big positive number is not even', () => {
    expected = false;
    actual = even(151);
    expect(actual).toBe(false);
  }); 
});


describe('odd', () => {

  test("The first duty of every Starfleet officer is to the truth, so let's find if a small positive number is truly odd", () => {
    expected = true;
    actual = odd(3);
    expect(actual).toBe(expected);
  });

  test('Search your feelings, you know it to be true, you can find if a small positive number is odd',() => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(true);
  });

  test('Space, the final frontier. No, not space, the last test: can find out if a small positive number is in fact not odd', () => {
    expected = false;
    actual = odd(2);
    expect(actual).toBe(expected);
  });
});
"Although this task is not as grand as the vast expanse of the cosmos, completing it is a journey worthy of a Starfleet captain. Qapla'!" 
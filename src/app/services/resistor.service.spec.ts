import { inject, TestBed } from '@angular/core/testing';

import { ResistorService } from './resistor.service';

describe('ResistorService', () => {
  let resistorService: ResistorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResistorService]
    });
  });

  beforeEach(inject([ResistorService], (service: ResistorService) => {
    resistorService = service
  }))

  it('should start with significant digits of 0', () => {
    expect(resistorService.significantDigits).toEqual(0)
  })

  it('should start with multiplier of 0', () => {
    expect(resistorService.multiplier).toEqual(0)
  })

  it('should start with tolerance of 20', () => {
    expect(resistorService.tolerance).toEqual(20)
  })

  it('should start with 0 ohms', () => {
    expect(resistorService.ohms).toEqual('0')
  })

  it('should set first significant digit', () => {
    resistorService.setFirstSignificantDigitFromColor('black')
    expect(resistorService.significantDigits).toEqual(0)

    resistorService.setFirstSignificantDigitFromColor('brown')
    expect(resistorService.significantDigits).toEqual(100)

    resistorService.setFirstSignificantDigitFromColor('red')
    expect(resistorService.significantDigits).toEqual(200)

    resistorService.setFirstSignificantDigitFromColor('orange')
    expect(resistorService.significantDigits).toEqual(300)

    resistorService.setFirstSignificantDigitFromColor('yellow')
    expect(resistorService.significantDigits).toEqual(400)

    resistorService.setFirstSignificantDigitFromColor('green')
    expect(resistorService.significantDigits).toEqual(500)

    resistorService.setFirstSignificantDigitFromColor('blue')
    expect(resistorService.significantDigits).toEqual(600)

    resistorService.setFirstSignificantDigitFromColor('violet')
    expect(resistorService.significantDigits).toEqual(700)

    resistorService.setFirstSignificantDigitFromColor('grey')
    expect(resistorService.significantDigits).toEqual(800)

    resistorService.setFirstSignificantDigitFromColor('white')
    expect(resistorService.significantDigits).toEqual(900)
  })

  it('should set second significant digit', () => {
    resistorService.setSecondSignificantDigitFromColor('black')
    expect(resistorService.significantDigits).toEqual(0)

    resistorService.setSecondSignificantDigitFromColor('brown')
    expect(resistorService.significantDigits).toEqual(10)

    resistorService.setSecondSignificantDigitFromColor('red')
    expect(resistorService.significantDigits).toEqual(20)

    resistorService.setSecondSignificantDigitFromColor('orange')
    expect(resistorService.significantDigits).toEqual(30)

    resistorService.setSecondSignificantDigitFromColor('yellow')
    expect(resistorService.significantDigits).toEqual(40)

    resistorService.setSecondSignificantDigitFromColor('green')
    expect(resistorService.significantDigits).toEqual(50)

    resistorService.setSecondSignificantDigitFromColor('blue')
    expect(resistorService.significantDigits).toEqual(60)

    resistorService.setSecondSignificantDigitFromColor('violet')
    expect(resistorService.significantDigits).toEqual(70)

    resistorService.setSecondSignificantDigitFromColor('grey')
    expect(resistorService.significantDigits).toEqual(80)

    resistorService.setSecondSignificantDigitFromColor('white')
    expect(resistorService.significantDigits).toEqual(90)
  })

  it('should set third significant digit', () => {
    resistorService.setThirdSignificantDigitFromColor('black')
    expect(resistorService.significantDigits).toEqual(0)

    resistorService.setThirdSignificantDigitFromColor('brown')
    expect(resistorService.significantDigits).toEqual(1)

    resistorService.setThirdSignificantDigitFromColor('red')
    expect(resistorService.significantDigits).toEqual(2)

    resistorService.setThirdSignificantDigitFromColor('orange')
    expect(resistorService.significantDigits).toEqual(3)

    resistorService.setThirdSignificantDigitFromColor('yellow')
    expect(resistorService.significantDigits).toEqual(4)

    resistorService.setThirdSignificantDigitFromColor('green')
    expect(resistorService.significantDigits).toEqual(5)

    resistorService.setThirdSignificantDigitFromColor('blue')
    expect(resistorService.significantDigits).toEqual(6)

    resistorService.setThirdSignificantDigitFromColor('violet')
    expect(resistorService.significantDigits).toEqual(7)

    resistorService.setThirdSignificantDigitFromColor('grey')
    expect(resistorService.significantDigits).toEqual(8)

    resistorService.setThirdSignificantDigitFromColor('white')
    expect(resistorService.significantDigits).toEqual(9)
  })

  it('should set multiplier', () => {
    resistorService.setMultiplierFromColor('black')
    expect(resistorService.multiplier).toEqual(1)

    resistorService.setMultiplierFromColor('brown')
    expect(resistorService.multiplier).toEqual(10)

    resistorService.setMultiplierFromColor('red')
    expect(resistorService.multiplier).toEqual(100)

    resistorService.setMultiplierFromColor('orange')
    expect(resistorService.multiplier).toEqual(1000)

    resistorService.setMultiplierFromColor('yellow')
    expect(resistorService.multiplier).toEqual(10000)

    resistorService.setMultiplierFromColor('green')
    expect(resistorService.multiplier).toEqual(100000)

    resistorService.setMultiplierFromColor('blue')
    expect(resistorService.multiplier).toEqual(1000000)

    resistorService.setMultiplierFromColor('violet')
    expect(resistorService.multiplier).toEqual(10000000)

    resistorService.setMultiplierFromColor('grey')
    expect(resistorService.multiplier).toEqual(100000000)

    resistorService.setMultiplierFromColor('white')
    expect(resistorService.multiplier).toEqual(1000000000)

    resistorService.setMultiplierFromColor('gold')
    expect(resistorService.multiplier).toEqual(0.1)

    resistorService.setMultiplierFromColor('silver')
    expect(resistorService.multiplier).toEqual(0.01)
  })

  it('should set the tolerance', () => {
    resistorService.setToleranceFromColor('brown')
    expect(resistorService.tolerance).toEqual(1)

    resistorService.setToleranceFromColor('red')
    expect(resistorService.tolerance).toEqual(2)

    resistorService.setToleranceFromColor('green')
    expect(resistorService.tolerance).toEqual(0.5)

    resistorService.setToleranceFromColor('blue')
    expect(resistorService.tolerance).toEqual(0.25)

    resistorService.setToleranceFromColor('violet')
    expect(resistorService.tolerance).toEqual(0.1)

    resistorService.setToleranceFromColor('grey')
    expect(resistorService.tolerance).toEqual(0.05)

    resistorService.setToleranceFromColor('gold')
    expect(resistorService.tolerance).toEqual(5)

    resistorService.setToleranceFromColor('silver')
    expect(resistorService.tolerance).toEqual(10)

    resistorService.setToleranceFromColor('none')
    expect(resistorService.tolerance).toEqual(20)
  })

  it('should throw an error if passed an invalid color', () => {
    expect(() => { resistorService.setFirstSignificantDigitFromColor('teal') }).toThrow(new Error('Not a valid color'))

    expect(() => { resistorService.setSecondSignificantDigitFromColor('teal') }).toThrow(new Error('Not a valid color'))

    expect(() => { resistorService.setThirdSignificantDigitFromColor('teal') }).toThrow(new Error('Not a valid color'))

    expect(() => { resistorService.setMultiplierFromColor('teal') }).toThrow(new Error('Not a valid color'))

    expect(() => { resistorService.setToleranceFromColor('teal') }).toThrow(new Error('Not a valid color'))
  })

  it('should get the available significant digit colors', () => {
    expect(resistorService.significantDigitColors).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white'
    ])
  })

  it('should get the available multiplier colors', () => {
    expect(resistorService.multiplierColors).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
      'gold',
      'silver'
    ])
  })

  it('should get the available tolerance colors', () => {
    expect(resistorService.toleranceColors).toEqual([
      'brown',
      'red',
      'green',
      'blue',
      'violet',
      'grey',
      'gold',
      'silver',
      'none'
    ])
  })
});

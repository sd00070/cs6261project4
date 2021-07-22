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

  it('should start with all black significant digits', () => {
    expect(resistorService.firstDigitColor).toEqual('black')

    expect(resistorService.secondDigitColor).toEqual('black')

    expect(resistorService.thirdDigitColor).toEqual('black')
  })

  it('should set the first significant digit color', () => {
    resistorService.firstDigitColor = 'green'
    expect(resistorService.firstDigitColor).toEqual('green')
  })

  it('should set the second significant digit color', () => {
    resistorService.secondDigitColor = 'yellow'
    expect(resistorService.secondDigitColor).toEqual('yellow')
  })

  it('should set the third significant digit color', () => {
    resistorService.thirdDigitColor = 'white'
    expect(resistorService.thirdDigitColor).toEqual('white')
  })

  it('should throw an error if trying to set significant digit color to invalid color', () => {
    expect(() => { resistorService.firstDigitColor = 'cyan' }).toThrow(new Error('Invalid color'))

    expect(() => { resistorService.secondDigitColor = 'cyan' }).toThrow(new Error('Invalid color'))

    expect(() => { resistorService.thirdDigitColor = 'cyan' }).toThrow(new Error('Invalid color'))
  })

  it('should start with multiplier of 1', () => {
    expect(resistorService.multiplier).toEqual(1)
  })

  it('should set the multiplier color', () => {
    resistorService.multiplierColor = 'brown'
    expect(resistorService.multiplierColor).toEqual('brown')
  })

  it('should throw an error if trying to set the multiplier color to invalid color', () => {
    expect(() => { resistorService.multiplierColor = 'cyan' }).toThrow(new Error('Invalid color'))
  })

  it('should return the correct multiplier value', () => {
    resistorService.multiplierColor = 'black'
    expect(resistorService.multiplier).toEqual(1)

    resistorService.multiplierColor = 'brown'
    expect(resistorService.multiplier).toEqual(10)

    resistorService.multiplierColor = 'red'
    expect(resistorService.multiplier).toEqual(100)

    resistorService.multiplierColor = 'orange'
    expect(resistorService.multiplier).toEqual(1000)

    resistorService.multiplierColor = 'yellow'
    expect(resistorService.multiplier).toEqual(10000)

    resistorService.multiplierColor = 'green'
    expect(resistorService.multiplier).toEqual(100000)

    resistorService.multiplierColor = 'blue'
    expect(resistorService.multiplier).toEqual(1000000)

    resistorService.multiplierColor = 'violet'
    expect(resistorService.multiplier).toEqual(10000000)

    resistorService.multiplierColor = 'grey'
    expect(resistorService.multiplier).toEqual(100000000)

    resistorService.multiplierColor = 'white'
    expect(resistorService.multiplier).toEqual(1000000000)

    resistorService.multiplierColor = 'gold'
    expect(resistorService.multiplier).toEqual(0.1)

    resistorService.multiplierColor = 'silver'
    expect(resistorService.multiplier).toEqual(0.01)
  })

  it('should start with tolerance of 20', () => {
    expect(resistorService.tolerance).toEqual(20)
  })

  it('should set the tolerance color', () => {
    resistorService.toleranceColor = 'brown'
    expect(resistorService.toleranceColor).toEqual('brown')
  })

  it('should throw an error if trying to set the tolerance color to invalid color', () => {
    expect(() => { resistorService.toleranceColor = 'black' }).toThrow(new Error('Invalid color'))
  })

  it('should return the correct tolerance value', () => {
    resistorService.toleranceColor = 'brown'
    expect(resistorService.tolerance).toEqual(1)

    resistorService.toleranceColor = 'red'
    expect(resistorService.tolerance).toEqual(2)

    resistorService.toleranceColor = 'green'
    expect(resistorService.tolerance).toEqual(0.5)

    resistorService.toleranceColor = 'blue'
    expect(resistorService.tolerance).toEqual(0.25)

    resistorService.toleranceColor = 'violet'
    expect(resistorService.tolerance).toEqual(0.1)

    resistorService.toleranceColor = 'grey'
    expect(resistorService.tolerance).toEqual(0.05)

    resistorService.toleranceColor = 'gold'
    expect(resistorService.tolerance).toEqual(5)

    resistorService.toleranceColor = 'silver'
    expect(resistorService.tolerance).toEqual(10)

    resistorService.toleranceColor = 'none'
    expect(resistorService.tolerance).toEqual(20)
  })

  it('should start with 0 ohms', () => {
    expect(resistorService.ohms).toEqual('0')
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

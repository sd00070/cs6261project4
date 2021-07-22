import { ResistorCalculatorPanel } from "./resistor-calculator.po";

describe('Resistor Calculator Panel', () => {
    let resistorCalculator: ResistorCalculatorPanel

    beforeEach(() => {
        resistorCalculator = new ResistorCalculatorPanel()
    })

    it('should initially display 0 Ohms', () => {
        expect(resistorCalculator.ohmsText).toEqual('0')
    })

    it('should initially display 20% tolerance', () => {
        expect(resistorCalculator.toleranceText).toEqual('20%')
    })

    it('should initially display black in all significant digits selection boxes', () => {
        expect(resistorCalculator.firstDigitSelectValue).toEqual('black')

        expect(resistorCalculator.secondDigitSelectValue).toEqual('black')

        expect(resistorCalculator.thirdDigitSelectValue).toEqual('black')
    })

    it('should initially display black in multiplier selection box', () => {
        expect(resistorCalculator.multiplierSelectValue).toEqual('black')
    })

    it('should initially display none in tolerance selection box', () => {
        expect(resistorCalculator.toleranceSelectValue).toEqual('none')
    })
})
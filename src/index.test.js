const rewire = require("rewire")
const index = rewire("./index")
const buildCSS = index.__get__("buildCSS")
// @ponicode
describe("buildCSS", () => {
    test("0", () => {
        let callFunction = () => {
            buildCSS(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            buildCSS(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            buildCSS(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

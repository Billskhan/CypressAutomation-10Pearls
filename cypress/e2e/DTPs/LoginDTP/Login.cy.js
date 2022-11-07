import _signin from './Login';
import SignInPTD from './LoginTestData'


SignInPTD.forEach((fixtureData) => {
    describe('Automation Test Suite - Fixtures', function () {
        describe(fixtureData.context, () => {
        // accessing the test data from the fixture file
            before(function () {
                cy.fixture(fixtureData.filename).as('data')
            })
        it('All Tests', function() {
            cy.get('@data').then((testData) => {
            testData.forEach((tc)=>{
                cy.log(tc.title)
                const objSignIn = new _signin();
                objSignIn.visit();
                
                //var strKeys = Object.keys(testData[0])
                Object.keys(testData[0]).forEach((value)=>{
                    if(value.substring(0,3) === "txt"){
                    const selector =  eval("tc.sel"+value.substring(3))
                    eval("cy.get("+selector+").type(tc."+value+")")
                    }
                    if(value.substring(0,3) === "btn"){
                        const selector =  eval("tc.sel"+value.substring(3))
                        eval("cy.get("+selector+").then(($btn)=>{$btn.click()})")
                    }
                    // if(value.substring(0,3) === ""){
                    //     const selector =  eval("tc.sel"+value.substring(3))
                    //     eval("cy.get("+selector+").then(($btn)=>{$btn.click()})")
                    // }
                    
                }) 
                
                //cy.recaptcha()

            if(tc.testType === "negative"){
                objSignIn.getTitle().contains('Sign In').should('be.visible');
            }
            if (tc.verificationType === "url") {
                cy.url().should('be.equal', tc.expectedResult);
            }
            if (tc.verificationType === "ErrorMessage") {
                objSignIn.getError().contains(tc.expectedResult).should('be.visible');
            }
        })
    })
    })
    })
    })
})

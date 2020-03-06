QUnit.module('MULTIPLY MODULE', {}) 
QUnit.test('TEST area (aysnc)', async assert => { 
    assert.expect(2) // expect two async tests 
    const ans = await area() 
    const len = ans.length
     console.info(`FETCHED ${len} characters: ${ans}`) 
     assert.notEqual(0, len, 'Length is not zero') 
     assert.notEqual(ans, 'No square for you', 'wrong answer') 
    })
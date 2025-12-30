

const{test,expect}=require('@playwright/test')

test('First Assertion test', async ()=>{

    expect(125).toBeLessThan(200);
})

test('Second Assertion test', async()=>{

    expect(185).toBe(185)
})

test('Third assertion test',async()=>{

    expect(200).toBeGreaterThan(100)
})
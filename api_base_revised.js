function plotA(a,b, f) {
    calculator.setExpression({id: 'line' + f, latex: 'y=2x+' +linethrough(a,b,2) + '\\{' +a + '<x<' + (a+1) + '\\}'})
calculator.setExpression({id: 'line' + (f+1), latex: 'y=-2x+' +linethrough((a+2),b,-2) +'\\{' +(a+1) + '<x<' + (a+2) + '\\}'})
calculator.setExpression({id: 'line' + (f+2), latex: 'y=' +(b+1) + '\\{'+ (a+0.5) + '<x<' + (a+1.5) + '\\}'})

}

function plotB(a,b, f) {
    calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1) + ')^2 + (y-' +(b+0.5) + ')^2 = 0.25 \\{' +(a+1) + '<x<' + (a+1.5) + '\\}'})
calculator.setExpression({id: 'circle' + (f+1), latex: '(x-' + (a+1) + ')^2 + (y-' +(b+1.5) + ')^2 = 0.25 \\{' +(a+1) + '<x<' + (a+1.5) + '\\}'})
calculator.setExpression({id: 'line' + (f+2), latex: 'y=' +(b+1)+ ' \\{'+ (a+0.1) + '<x<' + (a+1) + '\\}'})
calculator.setExpression({id: 'line' + (f+3), latex: 'y=' +b+' \\{'+ (a+0.1) + '<x<' + (a+1) + '\\}'})
calculator.setExpression({id: 'line' + (f+4), latex: 'y=' + (b+2) +' \\{'+ (a+0.1) + '<x<' + (a+1) + '\\}'})
calculator.setExpression({id: 'line' + (f+5), latex: 'x=' + (a+0.1) + '\\{' +(b) + '<y<' + (b+2) +' \\}'})

}


function plotC(a, b, f) {
calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1.1) + ')^2 + (y-'+(b+1)+')^2 = 1 \\{' +(a) + '<x<' + (a+1.8) + '\\}'})


}


function plotD(a,b, f) {
    calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1) + ')^2 + (y-' +(b+1) +')^2 = 1 \\{' +(a+1) + '<x<' + (a+2) + '\\}'})
calculator.setExpression({id: 'line' + (f+1), latex: 'y=' + b+' \\{'+ (a+0.2) + '<x<' + (a+1) + '\\}'})
calculator.setExpression({id: 'line' + (f+2), latex: 'y='+ (b+2) + ' \\{'+ (a+0.2) + '<x<' + (a+1) + '\\}'})
calculator.setExpression({id: 'line' + (f+3), latex: 'x=' + (a+0.2) + '\\{' + b+ '<y<' +(b+2)+ '\\}'})

}

function plotE(a,b, f) {
calculator.setExpression({id: 'line' + (f), latex: 'y=' + (b+1) + ' \\{'+ (a+0.3) + '<x<' + (a+1.8) + '\\}'})
calculator.setExpression({id: 'line' + (f+1), latex: 'y=' + (b) + '\\{'+ (a+0.3) + '<x<' + (a+1.8) + '\\}'})
calculator.setExpression({id: 'line' + (f+2), latex: 'y=' + (b+2) + '\\{'+ (a+0.3) + '<x<' + (a+1.8) + '\\}'})
calculator.setExpression({id: 'line' + (f+3), latex: 'x=' + (a+0.3) + '\\{' +b+'<y<'+(b+2)+'\\}'})

}
function plotF(a, b, f) {
    calculator.setExpression({id: 'line' + (f), latex: 'y=' + (b+1) + ' \\{'+ (a+0.3) + '<x<' + (a+1.3) + '\\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=' + (b+2) + ' \\{'+ (a+0.3) + '<x<' + (a+1.3) + '\\}'})
    calculator.setExpression({id: 'line' + (f+2), latex: 'x=' + (a+0.3) + '\\{ ' +b+'<y<'+(b+2)+' \\}'})
    
}

function plotG(a, b, f) {
calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1.1) + ')^2 + (y-' +(b+1) +')^2 = 1 \\{' +(a) + '<x<' + (a+1.7) + '\\}'})
calculator.setExpression({id: 'line' + (f+1), latex: 'x=' + (a+1.7) + '\\{ ' +b+'<y<'+(b+0.8)+' \\}'})
calculator.setExpression({id: 'line' + (f+2), latex: 'y=' + (b+0.8) + ' \\{'+ (a+1.2) + '<x<' + (a+1.7) + '\\}'})

}

function plotH(a, b, f) {
    calculator.setExpression({id: 'line' + (f), latex: 'x=' + (a+1.7) + ' \\{' +b+'<y<'+(b+2)+' \\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=' + (b+1) + ' \\{'+ (a+0.3) + '<x<' + (a+1.7) + '\\}'})
    calculator.setExpression({id: 'line' + (f+2), latex: 'x=' + (a+0.3) + '\\{ ' +b+'<y<'+(b+2)+'\\}'})
    
}
function plotI(a, b, f) {
    calculator.setExpression({id: 'line' + (f), latex: 'x=' + (a+1) + ' \\{ ' +b+'<y<'+(b+2)+' \\}'})
    
}
function plotJ(a, b, f) {
    calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1) + ')^2 + (y-' +(b+0.9) +')^2 = 0.8 \\{ ' +b+'<y<'+(b+0.8)+'\\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'x=' + (a+1.9) + '\\{' +(b+0.8)+'<y<'+(b+2)+' \\}'})
    calculator.setExpression({id: 'line' + (f+2), latex: 'y=' + (b+2) + ' \\{'+ (a+0.5) + '<x<' + (a+1.89) + '\\}'})
}
function plotK(a, b, f) {
    calculator.setExpression({id: 'line' + f, latex: 'y=x+' +(linethrough(a+0.5,b+1,1)) + '\\{' +(a+0.5) + '<x<' + (a+1.5) + '\\}'})
calculator.setExpression({id: 'line' + (f+1), latex: 'y=-x +' +(linethrough(a+0.5,b+1,-1)) +'\\{' +(a+0.5) + '<x<' + (a+1.5) + '\\}'})
calculator.setExpression({id: 'line' + (f+2), latex: 'x=' + (a+0.5) + ' \\{' +b+'<y<'+(b+2)+' \\}'})

}

function plotL(a, b, f) {
calculator.setExpression({id: 'line' + (f), latex: 'y=' + (b) + ' \\{'+ (a+0.3) + '<x<' + (a+1.8) + '\\}'})
calculator.setExpression({id: 'line' + (f+1), latex: 'x=' + (a+0.3) + '\\{ ' +b+'<y<'+(b+2)+'\\}'})

}

function plotM(a, b, f){
    calculator.setExpression({id: 'line' + f, latex: 'y=x+' +(linethrough(a+1.9,b+2,1)) + '\\{' +(a+1) + '<x<' + (a+1.9) + '\\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=-x +' +linethrough(a+0.1,b+2,-1) +'\\{' +(a+0.1) + '<x<' + (a+1) + '\\}'})
    calculator.setExpression({id: 'line' + (f+2), latex: 'x=' + (a+0.1) + ' \\{ ' +b+'<y<'+(b+2)+' \\}'})
    calculator.setExpression({id: 'line' + (f+3), latex: 'x=' + (a+1.9) + ' \\{ ' +b+'<y<'+(b+2)+'\\}'})
}

function plotN(a, b, f) {
    calculator.setExpression({id: 'line' + (f), latex: 'x=' + (a+0.1) + ' \\{ ' +b+'<y<'+(b+2)+'\\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'x=' + (a+1.9) + ' \\{ ' +b+'<y<'+(b+2)+' \\}'})
    calculator.setExpression({id: 'line' + (f+2), latex: 'y=-x/0.9+' +linethrough(a+0.1,b+2,-1/0.9)+ '\\{' +(a+0.1) + '<x<' + (a+1.9) + '\\}'})
}
function plotO(a, b, f) {
    calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1) + ')^2 + (y-' +(b+1) +')^2 = 1 \\{' +(a) + '<x<' + (a+2) + '\\}'})


}

function plotP(a, b, f) {
calculator.setExpression({id: 'circle' + (f), latex: '(x-' + (a+1) + ')^2 + (y-' +(b+1.5) +')^2 = 0.25 \\{' +(a+1) + '<x<' + (a+1.5) + '\\}'})
calculator.setExpression({id: 'line' + (f+1), latex: 'y=' + (b+1) + ' \\{'+ (a+0.1) + '<x<' + (a+1) + '\\}'})
calculator.setExpression({id: 'line' + (f+2), latex: 'y=' + (b+2) + ' \\{'+ (a+0.1) + '<x<' + (a+1) + '\\}'})
calculator.setExpression({id: 'line' + (f+3), latex: 'x=' + (a+0.1) + '\\{ ' +b+'<y<'+(b+2)+'\\}'})

}

function plotQ(a, b, f) {
    calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1) + ')^2 + (y-' +(b+1) +')^2 = 1 \\{' +(a) + '<x<' + (a+2) + '\\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=-x +' +(linethrough(a+1,b+1,-1)) +'\\{' +(a+1) + '<x<' + (a+2) + '\\}'})
}
function plotR(a, b, f) {
    calculator.setExpression({id: 'circle' + (f), latex: '(x-' + (a+1) + ')^2 + (y-' +(b+1.5) +')^2 = 0.25 \\{' +(a+1) + '<x<' + (a+1.5) + '\\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=' + (b+1) + '\\{'+ (a+0.1) + '<x<' + (a+1) + '\\}'})
    calculator.setExpression({id: 'line' + (f+2), latex: 'y=' + (b+2) + '\\{'+ (a+0.1) + '<x<' + (a+1) + '\\}'})
    calculator.setExpression({id: 'line' + (f+3), latex: 'x=' + (a+0.1) + '\\{ ' +b+'<y<'+(b+2)+' \\}'})
    calculator.setExpression({id: 'line' + (f+4), latex: 'y=-x +' +(linethrough(a+0.5,b+1,-1)) +'\\{' +(a+0.5) + '<x<' + (a+1.5) + '\\}'})
    }

function plotS(a, b, f) {
    calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1) + ')^2 + (y-' +(b+0.5) +')^2 = 0.25 \\{' +(a+1) + '<x<' + (a+2) + '\\}'})
    calculator.setExpression({id: 'circle' + (f+1), latex: '(x-' + (a+1) + ')^2 + (y-' +(b+0.5) +')^2 = 0.25 \\{' +b+'<y<'+(b+0.5)+' \\}'}) 
    calculator.setExpression({id: 'circle' + (f+2), latex: '(x-' + (a+1) + ')^2 + (y-' +(b+1.5) +')^2 = 0.25 \\{' +(a) + '<x<' + (a+1) + '\\}'})
    calculator.setExpression({id: 'circle' + (f+3), latex: '(x-' + (a+1) + ')^2 + (y-' +(b+1.5) +')^2 = 0.25 \\{'+(b+1.5) +'<y<'+ (b+2) +' \\}'})
}
function plotT(a, b, f) {
    calculator.setExpression({id: 'line' + (f), latex: 'y=' + (b+2) + ' \\{'+ (a+0.3) + '<x<' + (a+1.7) + '\\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'x=' + (a+1) + '\\{ ' +b+'<y<'+(b+2)+'\\}'})
    
    }

function plotU(a, b, f) {
        calculator.setExpression({id: 'circle' + f, latex: '(x-' + (a+1) + ')^2 + (y-' +(b+0.9) +')^2 = 0.8 \\{' +b+ '<y< ' +(b+0.8) + '\\}'})
        calculator.setExpression({id: 'line' + (f+1), latex: 'x=' + (a+1.9) + '\\{ ' +(b+0.8)+'<y<'+(b+2)+' \\}'})
        calculator.setExpression({id: 'line' + (f+2), latex: 'x=' + (a+0.1) + '\\{ ' +(b+0.8)+'<y<'+(b+2)+' \\}'})
}
function plotV(a, b, f) {
    calculator.setExpression({id: 'line' + f, latex: 'y=2x+' +linethrough(a+1,b,2)+ '\\{' +(a+1) + '<x<' + (a+2) + '\\}'})
calculator.setExpression({id: 'line' + (f+1), latex: 'y=-2x +' +linethrough(a+1,b,-2) +'\\{' +(a) + '<x<' + (a+1) + '\\}'})
}
function plotW(a, b, f){ 
    calculator.setExpression({id: 'line' + f, latex: 'y=2x+' +linethrough(a+0.5,b,2)+ '\\{' +(a+0.5) + '<x<' + (a+1) + '\\}'})
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=-4x+' +linethrough(a+0.5,b,-4)+ '\\{' +(a) + '<x<' + (a+0.5) + '\\}'})
    calculator.setExpression({id: 'line' + (f+2), latex: 'y=-2x+' +linethrough(a+1.5,b,-2)+ '\\{' +(a+1) + '<x<' + (a+1.5) + '\\}'})
    calculator.setExpression({id: 'line' + (f+3), latex: 'y=4x' +linethrough(a+1.5,b,4)+ '\\{' +(a+1.5) + '<x<' + (a+2) + '\\}'})
}
function plotX(a, b, f) {
    calculator.setExpression({id: 'line' + f, latex: 'y=-x+'+linethrough(a+1,b+1,-1) +'\\{' +(a) + '<x<' + (a+2) + '\\}'})
    
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=x+' +linethrough(a+1,b+1,1)+ '\\{' +(a) + '<x<' + (a+2) + '\\}'})
}

function plotY(a, b, f) {
    calculator.setExpression({id: 'line' + f, latex: 'y=-x+' +linethrough(a+1,b+1,-1)+ '\\{' +(a) + '<x<' + (a+1) + '\\}'})
    
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=x+' +linethrough(a+1,b+1,1)+ '\\{' +(a+1) + '<x<' + (a+2) + '\\}'})
    
    calculator.setExpression({id: 'line' + (f+2), latex: 'x=' + (a+1) + '\\{ ' +b+'<y<'+(b+1)+' \\}'})
}
function plotZ(a, b, f) {
    
    calculator.setExpression({id: 'line' + f, latex: 'y=x+' +linethrough(a,b,1)+ '\\{' +(a) + '<x<' + (a+2) + '\\}'})
    
    calculator.setExpression({id: 'line' + (f+1), latex: 'y=' + (b+2) + ' \\{' +(a) + '<x<' + (a+2) + '\\}'})
    calculator.setExpression({id: 'line' + (f+2), latex: 'y=' + (b) + ' \\{' +(a) + '<x<' + (a+2) + '\\}'})
    
}

function linethrough(x,y,m) {
    return (y-x* m)
}
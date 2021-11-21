// Define our labelmap
const labelMap = {
    1:{name:'0', color:'red'},
    2:{name:'1', color:'yellow'},
    3:{name:'2', color:'lime'},
    4:{name:'3', color:'blue'},
    5:{name:'4', color:'purple'},
    6:{name:'5', color:'red'},
    7:{name:'6', color:'red'},
    8:{name:'7', color:'red'},
    9:{name:'8', color:'red'},
    10:{name:'9', color:'red'},
    11:{name:'a', color:'red'},
    12:{name:'b', color:'red'},
    13:{name:'c', color:'red'},
    14:{name:'d', color:'red'},
    15:{name:'e', color:'red'},
    16:{name:'f', color:'red'},
    17:{name:'g', color:'red'},
    18:{name:'h', color:'red'},
    19:{name:'i', color:'red'},
    20:{name:'j', color:'red'},
    21:{name:'k', color:'red'},
    22:{name:'l', color:'red'},
    23:{name:'m', color:'red'},
    24:{name:'n', color:'red'},
    25:{name:'o', color:'red'},
    26:{name:'p', color:'red'},
    27:{name:'q', color:'red'},
    28:{name:'r', color:'red'},
    29:{name:'s', color:'red'},
    30:{name:'t', color:'red'},
    31:{name:'u', color:'red'},
    32:{name:'v', color:'red'},
    33:{name:'w', color:'red'},
    34:{name:'x', color:'red'},
    35:{name:'y', color:'red'},
    36:{name:'z', color:'red'},
    37:{name:'I love you', color:'red'},
    38:{name:'hello', color:'red'},
    39:{name:'Yes', color:'red'},
    40:{name:'No', color:'red'},
    41:{name:'Thank you', color:'red'},
    
    
    
    
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}
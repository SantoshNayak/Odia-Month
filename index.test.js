const monthParser = require('./index.js')
if(monthParser('january') != 'ଜାନୁଆରୀ'){
    throw new Error('Valida data not giving correct odia word')
}
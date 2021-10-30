module.exports = (monthName) =>{
    let lowerMonth = monthName.toLowerCase()
    switch(lowerMonth) {
        case 'january':
            return 'ଜାନୁଆରୀ'
          break;
        case 'february':
            return 'ଫେବୃଆରୀ'
          break;
        case 'march':
            return 'ମାର୍ଚ୍ଚ'
          break;
        case 'april':
            return 'ଏପ୍ରିଲ'
          break;
        case 'may':
            return 'ମେ'
          break;
        case 'june':
            return 'ଜୁନ'
          break;
        case 'july':
            return 'ଜୁଲାଇ'
          break;
        case 'august':
            return 'ଅଗଷ୍ଟ'
          break;
        case 'september':
            return 'ସେପ୍ଟେମ୍ବର'
          break;
        case 'october':
            return 'ଅକ୍ଟୋବର'
          break;
        case 'november':
            return 'ନଭେମ୍ବର'
          break;
        case 'december':
            return 'ଡ଼ିସେମ୍ବର'
          break;
     
        default:
            return 'No Month matched'
            break;
       
          // code block
      }
}
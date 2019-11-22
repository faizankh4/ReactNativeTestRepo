var horizantalStatus = {
   rainy:{
       ios:'ios-rainy',
       android:'md-rainy'
   },
   cloud:{
    ios:'ios-cloudy',
    android:'md-cloudy'  
   },
   thunderstorm:{
    ios:'ios-thunderstorm',
    android:'md-thunderstorm'   
   },
   sunny:{
     ios:'ios-sunny',
     android:'md-sunny'
   }


}


var horizontalFlatListDataitem = [
    {
       hour: '1 am',
       status: horizantalStatus.rainy,
       degree:57,
    },
    {
        hour: '2 am',
        status: horizantalStatus.cloud,
        degree:58,
     },
     {
        hour: '3 am',
        status: horizantalStatus.thunderstorm,
        degree:58,
     },
     {
        hour: '1 am',
        status: horizantalStatus.sunny,
        degree:59,
     },
     {
        hour: '1 am',
        status: horizantalStatus.rainy,
        degree:57,
     },
     {
         hour: '2 am',
         status: horizantalStatus.cloud,
         degree:58,
      },
      {
         hour: '3 am',
         status: horizantalStatus.thunderstorm,
         degree:58,
      },
      {
         hour: '1 am',
         status: horizantalStatus.sunny,
         degree:59,
      },

]

export {horizantalStatus}
export {horizontalFlatListDataitem}
let cars :{id:number,carType:String,color:String,year:number}[]=[
  { id: 1, carType: "Sedan", color: "Blue", year: 2022 },
  { id: 2, carType: "Van", color: "Gray", year: 2020 },
  { id: 3, carType: "Convertible", color: "Purple", year: 1974 },
  { id: 4, carType: "SUV", color: "Black", year: 2021 },
  { id: 5, carType: "Hatchback", color: "White", year: 2019 },
  { id: 6, carType: "Pickup", color: "Red", year: 2023 }
]

const resolvers = {
    Query : {
        getCars: () => cars
    },
    Mutation : {
        addCar: (_:any, args:any)=>{
            const newcar = {
                id:cars.length+1,
                carType:args.carType,
                color : args.color,
                year : args.year
            }
            cars.push(newcar)
            return newcar
        }
    }
}

export default resolvers
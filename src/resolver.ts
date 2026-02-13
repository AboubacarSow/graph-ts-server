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
        getCars: () => cars,
        getOne : (_:any, args:any) => {
            return cars.find(c=>c.id===Number(args.id)) || null
        }
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
        },

        editCar:(_:any , args:any)=>{
            const car = cars.find(c=>c.id===Number(args.id))
            if(!car) return null
            car.carType = args.carType
            car.color = args.color
            return car
        },
        deleteCar:(_:any,args:any)=>{
            const index = cars.findIndex(c=>c.id===Number(args.id));
            if(index===-1) return null
            const carToDelete = cars[index];
            cars.splice(index,1)
            return carToDelete;
        }
    }
}

export default resolvers
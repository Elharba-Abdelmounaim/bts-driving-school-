export const SAMPLE_DATA: DrivingVehicleProps[] = [
  {
    vehicleName: "Toyota Corolla 2023",
    school: "ABC Driving School",
    type: "Car",
    rate: 4.8,
    pricePerHour: 25,
    currency: "$",
    favorite: false,
    image: require("@/assets/images/Automatic.png"), // أو Automatic2.png حسب اختيارك
  },
  {
    vehicleName: "Honda CB500",
    school: "Motorcycle Academy",
    type: "Bike",
    rate: 4.9,
    pricePerHour: 20,
    currency: "$",
    favorite: true,
    image: require("@/assets/images/Driving School Motorcycle.png"),
  },
  {
    vehicleName: "Mercedes Sprinter",
    school: "Bus Training Center",
    type: "Bus",
    rate: 4.7,
    pricePerHour: 50,
    currency: "$",
    favorite: false,
    image: require("@/assets/images/Medium Driving School Bus.png"),
  },
  {
    vehicleName: "Renault Clio 2022",
    school: "City Driving School",
    type: "Car",
    rate: 4.6,
    pricePerHour: 22,
    currency: "$",
    favorite: false,
    image: require("@/assets/images/Manual1.png"), // صورة السيارة المانيوال
  },
  {
    vehicleName: "Iveco Minibus",
    school: "Urban Driving Academy",
    type: "Bus",
    rate: 4.5,
    pricePerHour: 40,
    currency: "$",
    favorite: false,
    image: require("@/assets/images/Small Driving School Bus.png"),
  },
];


export const FILTERS = [
  { label: "Automatic", image: require("@/assets/images/Automatic.png") },
  { label: "Manual", image: require("@/assets/images/Manual1.png") },
  { label: "Car", image: require("@/assets/images/Driving school.png") },
  { label: "Bike", image: require("@/assets/images/Driving School Motorcycle.png") },
  { label: "Bus", image: require("@/assets/images/Medium Driving School Bus.png") },
];

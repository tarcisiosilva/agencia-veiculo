const vehicles = require('../data/vehicles');

const resolvers = {
  Query: {
    vehicles: () => vehicles,
    vehicle: (_, { id }) => vehicles.find(vehicle => vehicle.id === id),
  },
  Mutation: {
    addVehicle: (_, { make, model, year, price }) => {
      const newVehicle = {
        id: (vehicles.length + 1).toString(),
        make,
        model,
        year,
        price,
      };
      vehicles.push(newVehicle);
      return newVehicle;
    },
    updateVehicle: (_, { id, make, model, year, price }) => {
      const vehicleIndex = vehicles.findIndex(vehicle => vehicle.id === id);
      if (vehicleIndex === -1) return null;
      const updatedVehicle = {
        ...vehicles[vehicleIndex],
        make: make || vehicles[vehicleIndex].make,
        model: model || vehicles[vehicleIndex].model,
        year: year || vehicles[vehicleIndex].year,
        price: price || vehicles[vehicleIndex].price,
      };
      vehicles[vehicleIndex] = updatedVehicle;
      return updatedVehicle;
    },
    deleteVehicle: (_, { id }) => {
      const vehicleIndex = vehicles.findIndex(vehicle => vehicle.id === id);
      if (vehicleIndex === -1) return 'Vehicle not found';
      vehicles.splice(vehicleIndex, 1);
      return `Vehicle with id ${id} deleted successfully`;
    },
  },
};

module.exports = resolvers;
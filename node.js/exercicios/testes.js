
function calculateFuelExpense(distanceInMeters, fuelType) {
    if (typeof distanceInMeters !== 'number' || distanceInMeters < 0) {
      return "Invalid distance!";
    }

    if (fuelType !== 'gasoline' && fuelType !== 'etanol') {
      return "Fuel type invalid!";
    }

    const gasolineEfficiency = 16
    const etanolEfficiency = 11
    const distanceInKm = distanceInMeters / 1000;

    let litersRequired = 0;
    if (fuelType === 'gasoline') {
      litersRequired = distanceInKm / gasolineEfficiency;
    } else {
      litersRequired = distanceInKm / etanolEfficiency;
    }

    return Math.round(litersRequired);
  }

  const distance = 5000;
  const fuel = "gasoline";
  const liters = calculateFuelExpense(distance, fuel);
  console.log(`Will be necessary ${liters} liters ${fuel} to travel ${distance} in meters.`)

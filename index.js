let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0
class Driver {
	constructor(name) {
	  this.id = ++driverId;
	  this.name = name;
	  store.drivers.push(this)
	}
	trips() {
        return store.trips.filter(
            function(trip) {
              return trip.driverId === this.id;
            }.bind(this)
        );
    }
		passengers() {
			// Empty array of Drivers passengers.
			let driverPassengers = []

			// Array of drivers trips.
		  const trips = this.trips();

			// Iterates over drivers trips.
			trips.forEach( function (trip) {
				// pushes trip into array of all drivers passengers.
		  	driverPassengers.push(trip.passenger())
		  }  )
			// Returns array of all drivers passengers.
			return driverPassengers;

		}
}

let passengerId = 0
class Passenger {
	constructor(name) {
	  this.name = name
	  this.id = ++passengerId
	  store.passengers.push(this)
	}
	trips() {
		// expty array of all the passengers trips
		// let passengerTrips = [];
		//
		//
		// const allTrips = store.trips;
		//
		// allTrips.forEach( function(trip) {
		// 	if (trip.passengerId === this.id) {
		// 		passengerTrips.push(trip);
		// 	}
		// }).bind(this);
		//
		// return passengerTrips;

		return store.trips.filter(
			function(trip) {
				return trip.passengerId === this.id;
			}.bind(this)
		);
	}
	drivers(){
		let passengerDrivers = []
		let trips = this.trips();

		trips.forEach(function(trip) {
			passengerDrivers.push(trip.driver())
		})
		return passengerDrivers;
	}




}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
	  if (driver) {
	  	this.driverId = driver.id;
	  }
	  if (passenger) {
		  this.passengerId = passenger.id;
	  }
 // insert in the trip to the store
	  store.trips.push(this);
  }
  setDriver(driver) {
	  this.driverId = driver.id;
  }
  driver() {
	  return store.drivers.find(
	    function(driver) {
	  	  return driver.id === this.driverId;
	    }.bind(this)
	  );
  }
  setPassenger(passenger) {
	  this.passengerId = passenger.id;
  }
  passenger() {
	  return store.passengers.find(
  	  function(passenger) {
	      return passenger.id === this.passengerId;
	    }.bind(this)
	  );
  }
}

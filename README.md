# TEST2_oye

While solving the assignment, I have solely worked on providing the solution to the asked exercises. I have used Nodejs, Express and MySQL for my database.

Assumptions: (passenger = customer)

1. Passenger is rating a ride is equal to the rating the driver. i.e. passenger is rating the driver after every ride.

2. while updating the rating of both driver and passenger, I assuming that as inputs, I am getting the given rating and the other person's ID i.e. driver_id if passenger is rating and customer_id if driver is rating after the ride.


Schemas that I used:
driver and customer
MySQL script: CREATE TABLE driver(
				driver_id INT PRIMARY KEY,
				driver_name varchar(50),
				total_rides INT,
				rating DECIMAL(3,2)
				);

				CREATE TABLE customer(
				customer_id INT PRIMARY KEY,
				customer_name varchar(50),
				total_rides INT,
				rating DECIMAL(3,2)
				);

and I also created a table 'ride' which can be used to get information about the rides, corresponding driver and passenger. 

ride 			CREATE TABLE ride(
				ride_id INT PRIMARY KEY,
				driver_id INT,
				customer_id INT,
				rating_given_by_driver INT,
				rating_given_by_customer INT,
        FOREIGN KEY(driver_id) REFERENCES driver(driver_id) ON DELETE SET NULL,
				FOREIGN KEY(customer_id) REFERENCES customer(customer_id) ON DELETE SET NULL
				);
        
and here driver_id and customer_id are foreign key to driver and customer schema.

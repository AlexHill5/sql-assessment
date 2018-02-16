select vehicles.id, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id, users.name from vehicles
join users on users.id = vehicles.owner_id
where vehicles.year > 2000
order by year desc
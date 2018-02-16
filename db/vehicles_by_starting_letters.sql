select vehicles.id, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id from vehicles
join users on users.id = vehicles.owner_id
where users.name like concat($1::TEXT, '%')
update vehicles set owner_id = $1
where vehicles.id = $2
returning *
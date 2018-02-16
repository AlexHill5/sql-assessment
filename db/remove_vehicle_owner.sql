update vehicles set owner_id = NULL
where id = $1
returning *
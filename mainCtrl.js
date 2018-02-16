module.exports = {
    getUsers: (req, res, next) => {
        let db = req.app.get('db');

        db.get_users()
        .then(users => res.status(200).send(users))
        .catch(() => res.status(500).send());
    },
    getVehicles:(req, res, next) => {
        let db = req.app.get('db');

        db.get_vehicles()
        .then(vehicles => res.status(200).send(vehicles))
        .catch(() => res.status(500).send());
    },
    addUser:(req, res, next) => {
        let db = req.app.get('db');
        let { name, email } = req.body;

        db.add_user([name, email])
        .then(users => res.status(200).send(users))
        .catch(() => res.status(500).send());
    },
    addVehicle:(req, res, next) => {
        let db = req.app.get('db');
        let {make, model, year, owner_id} = req.body;

        db.add_vehicle([make, model, year, owner_id])
        .then(vehicles => res.status(200).send(vehicles))
        .catch(() => res.status(500).send());
    },
    vehicleCountByOwner:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.vehicle_count_by_owner([params.userID])
        .then(count => res.status(200).send(count))
        .catch(() => res.status(500).send());
    },
    vehiclesByOwner:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.vehicles_by_owner([params.userID])
        .then(vehicles => res.status(200).send(vehicles))
        .catch(() => res.status(500).send());
    },
    vehiclesByQuery:(req, res, next) => {
        let db = req.app.get('db');
        let {query} = req;
        if(query.userEmail) {
            db.vehicles_by_email([query.userEmail])
            .then(vehicles => res.status(200).send(vehicles))
            .catch(() => res.status(500).send());
        }
        else if(query.userFirstStart) {
             db.vehicles_by_starting_letters([query.userFirstStart])
            .then(vehicles => res.status(200).send(vehicles))
            .catch(() => res.status(500).send());           
        }
    },
    vehiclesByYear:(req, res, next) => {
        let db = req.app.get('db');

        db.vehicles_by_year()
        .then(vehicles => res.status(200).send(vehicles))
        .catch(() => res.status(500).send());
    },
    updateOwner:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.update_vehicle_owner([params.userID, params.vehicleID])
        .then(vehicle => res.status(200).send(vehicle))
        .catch(() => res.status(500).send());
    },
    removeOwner:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.remove_vehicle_owner([params.vehicleID])
        .then(vehicle => res.status(200).send(vehicle))
        .catch(() => res.status(500).send());
    },
    removeVehicle:(req, res, next) => {
        let db = req.app.get('db');
        let {params} = req;

        db.delete_vehicle([params.vehicleID])
        .then(vehicle => res.status(200).send(vehicle))
        .catch(() => res.status(500).send());
    }
}
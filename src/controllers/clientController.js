const Client = require('../models/Client')

exports.createClient = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await Client.create(clientData);
        res.status(201).json({
            success: true,
            data: newClient,
            message: 'Client created successfully'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to create client',
            error: error.message
        });
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find({});
        res.json({
            success: true,
            data: clients,
            message: 'Clients retrieved successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve clients',
            error: error.message
        });
    }
}


exports.getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findById(id);

        if (!client) {
            return res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }

        res.status(200).json({
            success: true,
            data: client,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve client',
            error: error.message
        });
    }
}

exports.updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const clientData = req.body;

        const updateClient = await Client.findByIdAndUpdate(id, clientData, {
            new: true,
            runValidators: true
        })


        if (!updateClient) {
            return res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }

        res.status(200).json({
            success: true,
            data: updateClient,
            message: 'Client updated successfully'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to update client',
            error: error.message
        });
    }
}


exports.deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedClient = await Client.findByIdAndDelete(id);

        if (!deletedClient) {
            return res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }

        res.status(200).json({
            success: true,
            data: deletedClient,
            message: 'Client deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete client',
            error: error.message
        });
    }
};
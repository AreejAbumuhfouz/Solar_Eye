const Service = require('../models/Service');

// Controller to get all services
exports.getAllServices = async (req, res) => {
    const {
      type,
      price,
      duration,
      contractType,
      serviceFrequency
    } = req.query; // Accepting filter parameters from query string
  
    // Build the filter object
    const filter = { IsDeleted: false }; // Exclude deleted services by default
    
    // Filter by type (packageName), if provided
    if (type) {
      filter.packageName = type;  // Filter by packageName (Partial, Full, Premium)
    }
  
    // Filter by price range, if provided
    if (price) {
        const [minPrice, maxPrice] = price.split(','); // Assuming price is passed as "minPrice,maxPrice"
        if (minPrice && maxPrice) {
          filter.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };  // Price range filter
        } else {
          console.error('Invalid price range format');
        }
      }
  
    // Filter by duration, if provided
    if (duration) {
      filter.duration = duration; // Filter by duration (per month, per year, etc.)
    }
  
    // Filter by contractType, if provided
    if (contractType) {
      filter.contractType = contractType;  // Filter by contract type (Short-term, Long-term)
    }
  
    // Filter by serviceFrequency, if provided
    if (serviceFrequency) {
      filter.serviceFrequency = serviceFrequency;  // Filter by service frequency (Weekly, Monthly, Yearly)
    }
  
    try {
      // Retrieve services based on the filter
      const services = await Service.find(filter);
      
      // Return the filtered list of services
      res.status(200).json(services);
    } catch (err) {
      // Handle any errors
      res.status(500).json({ message: 'Error retrieving services', error: err });
    }
  };
  
// Controller to add a new service
exports.addService = async (req, res) => {
  try {
    const { packageName, description, features, price, duration, contractType, contractDescription, serviceFrequency, frequencyDescription, additionalServices, icon } = req.body;

    const newService = new Service({
      packageName,
      description,
      features,
      price,
      duration,
      contractType,
      contractDescription,
      serviceFrequency,
      frequencyDescription,
      additionalServices,
      icon
    });

    await newService.save();
    res.status(201).json({ message: 'Service added successfully', service: newService });
  } catch (err) {
    res.status(500).json({ message: 'Error adding service', error: err });
  }
};

// Controller to edit an existing service
exports.editService = async (req, res) => {
  const serviceId = req.params.id;

  try {
    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const { packageName, description, features, price, duration, contractType, contractDescription, serviceFrequency, frequencyDescription, additionalServices, icon } = req.body;

    service.packageName = packageName || service.packageName;
    service.description = description || service.description;
    service.features = features || service.features;
    service.price = price || service.price;
    service.duration = duration || service.duration;
    service.contractType = contractType || service.contractType;
    service.contractDescription = contractDescription || service.contractDescription;
    service.serviceFrequency = serviceFrequency || service.serviceFrequency;
    service.frequencyDescription = frequencyDescription || service.frequencyDescription;
    service.additionalServices = additionalServices || service.additionalServices;
    service.icon = icon || service.icon;

    await service.save();

    res.status(200).json({ message: 'Service updated successfully', service });
  } catch (err) {
    res.status(500).json({ message: 'Error updating service', error: err });
  }
};

// Controller to delete a service (soft delete by updating IsDeleted flag)
exports.deleteService = async (req, res) => {
  const serviceId = req.params.id;

  try {
    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    service.IsDeleted = true; // Mark as deleted instead of removing it
    await service.save();

    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting service', error: err });
  }
};


// Controller to get 3 random services
exports.getRandomPackages = async (req, res) => {
  try {
    // Retrieve 3 random services that are not deleted
    const randomServices = await Service.aggregate([
      { $match: { IsDeleted: false } },  // Ensure the services are not deleted
      { $sample: { size: 3 } }  // Randomly select 3 services
    ]);

    if (randomServices.length === 0) {
      return res.status(404).json({ message: 'No services found' });
    }

    res.status(200).json(randomServices);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving random services', error: err });
  }
};

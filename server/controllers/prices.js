import Price from './../models/price.js';

export const getPrices =  async (req, res) => {
    try {
        const prices = await Price.find();

        res.status(200).json(prices);
    }catch (error){
        res.status(404).json({message: error.message})
    }
}

export const changePrices = async (req, res) => {
    try {
        const price = await Price.findById(req.params.id);

        if (!price) return res.status(404).json({message: 'нету'})

        const updatedPrice = await Price.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json(updatedPrice);
    }catch (error){
        res.status(404).json({message: error.message})
    }
}

export const createPrice = async (req, res) => {
    const prices = req.body;

    await Price.insertMany(prices).then(function() {
        res.status(201).json(prices)
    }).catch(function(error) {
        res.status(409).json({message: error.message})
    });
}
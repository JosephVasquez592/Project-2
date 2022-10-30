const router = require('express').Router();
const List = require('../../models/lists');

// GET everything
router.get('/', (req, res) => {
    List.findAll().then((listData)=> {
        res.json(listData);
    });
});

// GET purchased items
router.get('/purchased', (req, res) => {
    List.findAll({
        order: ['item_name'],
        where: {
            purchased: true
        },
        attributes: {
            exclude: ['id']
        }
    }).then((listData) => {
        res.json(listData);
    });
});

// GET a single item
router.get('/:id', (req, res) => {
    List.findByPk(req.params.id).then((listData) => {
        res.json(listData);
    });
});

// CREATE a list
router.post('/', (req, res) => {
    List.create(req.body)
    .then((newList) => {
        res.json(newList);
    })
    .catch((err) => {
        res.json(err);
    });
});

// updates list based on id
router.put('/:id', (req, res) => {
    List.update(
        {
            item_name: req.body.item_name,
            purchased: req.body.purchased
    },
    {
        where: {
            id: req.params.id,
        },
    }).then((updatedList) => {
        res.json(updatedList);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
});

// Deletes an item based on id
router.delete('./:id', (req,res) => {
    List.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedListItem) => {
        res.json(deletedListItem);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
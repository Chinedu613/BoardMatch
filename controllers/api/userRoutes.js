const router = require('express').Router();
const { User } = require('../../models');



router.get('/', async (req,res)=>{
    try{
      const userData = await User.findAll()
      res.status(200).json(userData);
    }catch(err){
      res.status(400).json(err);
    }
  })

  router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id)
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/auth', (req,res)=>{
    res.send(req.session.logged_in);
  })
  
  router.post('/', async (req, res) => {
    try {
      console.log(req.body);
      const userData = await User.create(req.body);
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
 router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { userName: req.body.username }});
      
      console.log(userData);
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
      req.session.user_id = userData.id;
      req.session.logged_in = true;   
      
      res.send(true);
  
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        console.alert("LOGGED OUT");
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
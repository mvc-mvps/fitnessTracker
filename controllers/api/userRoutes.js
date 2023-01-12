const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

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

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
// route to create new user
router.post('/signup', async (req, res) => {
  try {
    const userInput = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userInput.id;
      req.session.logged_in = true;

      res.status(200).json(userInput);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(200).end();
//       return res.redirect('/signup');
//     });
//   } else {
//     res.status(404).end();
//     console.log('not quite');
//   }
// });

// router.get('/logout', function(req, res) {
//   req.session.destroy(function(err){
//      if(err){
//         console.log(err);
//      }else{
//          console.log(session.username);
//          req.end();
//          res.redirect('/signup');
//      }
//   });

// });

// router.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return console.log(err);
//     }
//     res.send("logged out");
//     console.log("logged out");
//     res.redirect('/');
//   });
// });

// DELETE /api/auth/logout
router.delete('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    });
  } else {
    res.end()
  }
});



module.exports = router;
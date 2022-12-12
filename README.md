## DEPLOYED LINK

# https://flexyoga.netlify.app/

## SERVER
TECH USED : NODEJS ,EXPRESS MONGODB

# HOW TO RUN
  
  1) Run npm install to install all the librabries
  2) nodemon server.js to start the server on your localhost

# APPROACH

   So the approach we are following here is :

   # USER REGISTRATION
      
      1)  User will firstly come and register
         1.1) If user already exits:
            a) We would just update certain fields like name and age for the user
         1.2) New user : We would create a new entry in our db for the user

         In both the above case we have put a check that age should be greater than 18 and less than 65
        
  # SLOT BOOKING

     2) Now user will register for a slot
       2.1) If the user has already booked a slot in the curr month then we ask them to come in next month
       2.2) If the user is booking the slot for the first time in the month than we will update the batch and date 

   # PAYMENT

   3) If the user had previously also booked slot with us we will just accept the payment else will save the card details and accept the payment
# DEPLOYED LINK

## https://flexyoga.netlify.app/

## SERVER
TECH USED : NODEJS ,EXPRESS MONGODB

# HOW TO RUN
  
  1) Run npm install to install all the librabries
  2) nodemon server.js to start the server on your localhost

## APPROACH

   So the approach we are following here is :

   ## USER REGISTRATION (/register/user)
      
      1)  User will firstly come and register
         1.1) If user already exits:
            a) We would just update certain fields like name and age for the user
         1.2) New user : We would create a new entry in our db for the user

         In both the above case we have put a check that age should be greater than 18 and less than 65
        
  ## SLOT BOOKING (/booking/book)

     2) Now user will register for a slot
       2.1) If the user has already booked a slot in the curr month and has also paid the fees then we ask them to book a new slot in next month
       2.2) If the user is booking the slot for the first time in the month than we will update the batch and date in bookingmodel and payDone is set to false for the current month in userModel

   ## PAYMENT  (/payement/pay)

   3) If the user had previously also booked slot with us we will just accept the payment else will save the card details and accept the payment and in both of the cases we will set payDone to true in userModel

## ER DIAGRAM

![image](https://user-images.githubusercontent.com/56127597/207072732-56266df8-e89a-4d71-85b3-d91ada8f19a1.png)

  **uid** : every users unique id 
  **phno** : phone number
  **payDone** : Keeps a check on wheather the payment for the particular month is done or not
  

## CLIENT
  TECH USED : REACT ,MATERIAL UI

# HOW TO RUN 
  1) Run npm install to install all the librabries
  2) npm start to start the server on your localhost


# IMAGE REFERENCES

   # REGISTRATION PAGE
   
   ![image](https://user-images.githubusercontent.com/56127597/207048975-7c7d4091-43f5-4764-a9da-a1ac295494f5.png)
   
     Age check :
   
   ![image](https://user-images.githubusercontent.com/56127597/207049226-01d18cc9-a8bb-4b64-b9b1-82229800cc1e.png)

   
   # SLOT BOOKING PAGE
   
     New Booking:
     
   ![image](https://user-images.githubusercontent.com/56127597/207049542-f5a0908b-65f5-4f64-95d3-a8ae53e6038f.png)
   
     Trying to change batch in same month:
     
   ![image](https://user-images.githubusercontent.com/56127597/207049891-49699c38-3dff-4e6c-ac31-7ecdadb26658.png)
   
   
   # PAYEMENT PAGE
   
   ![image](https://user-images.githubusercontent.com/56127597/207055316-54077c70-60f5-4984-8e29-d542a3021982.png)

   
   ![image](https://user-images.githubusercontent.com/56127597/207051737-05850d42-5e5c-43f5-bd72-7f932120c725.png)



     
# IMPROVEMENTS:
     1) Verification of email and phno using otps
     2) Allow users to book for multiple months in advance
    
 **registration might take some time due to free tier backend hosting**


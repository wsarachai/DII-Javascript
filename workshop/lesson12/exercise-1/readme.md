## [Home](../../../README.md) > [Back](../lesson.md) > Exercise #1

### Your tasks:

#### Setting up the hosting database for MongoDB

1. Create a Hosting Database With Atlas

   - Got to [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
   - Start with a free account:
     - Create a new account with Atlas.
     - Register to a free account with atlas.
     - Login to the system.
     - Create a new project `camt-tours-app`
       <br/><br/><img width="512" src="img/img2.png"/><br/>
       <img width="512" src="img/img3.png"/><br/>
       <img width="512" src="img/img.png"/><br/><br/>
     - Make sure you are a “`Project Owner` and then click `Create Project`
       <br/><br/><img width="512" src="img/img4.png"/><br/><br/>
     - Build a database by selecting a free plan and click `Create`
       <br/><br/><img width="512" src="img/img5.png"/>
       <br/><img width="512" src="img/img6.png"/><br/><br/>
     - Let’s all option is default and then click `Create Cluster`
       <br/><br/><img width="512" src="img/img7.png"/><br/><br/>
     - For the Security choose `Username and Password`
       <br/><br/><img width="512" src="img/img8.png"/><br/><br/>
       Save your password to text editor else for later use (For example, `notepad`)
     - Where would you like to connect from?
       - Select `My Local Environment`
       - Click `Add My Current IP Address`
       - Finally, click `Finish and Close`
         <br/><br/><img width="512" src="img/img9.png"/><br/><br/>
     - We will use the Compass App to connect to this database
       - Click the `Connect` button
         <br/><br/><img width="1024" src="img/img10.png"/><br/></br>
       - Select `Compass` button
         <br/><br/><img width="512" src="img/img11.png"/><br/></br>
       - Choose `I have MongoDB Compass` and copy the connection link. Save the connection link to text editor such as `notepad`
         <br/><br/><img width="512" src="img/img12.png"/><br/></br>

2. MongoDB Compass installation

   - Goto [https://www.mongodb.com/products/compass](https://www.mongodb.com/products/compass)
   - Download and install the Compass App upon your operating system (Window, Mac), I recommend downloading the stable version.
   - Open the Compass App.

3. Use Compass to connect to the Hosting Database

   - Click `New connection` and paste the connection link you saved in the previous step
     <br/><br/><img width="800" src="img/img13.png"/><br/></br>
   - Replace `<password>` with your password generated in the previous step and Click `Connect`
   - `Optional setting:` If you can't connect to the database, we need to allow the clients can access our database server from anywhere
     - Click `Network Access` then on the `IP Address' section, click `EDIT`
       <br/><br/><img width="800" src="img/img14.png"/><br/></br>
     - Click `ALLOW ACCESS FROM ANYWHERE` then click `Confirm`
       <br/><br/><img width="512" src="img/img15.png"/><br/></br>
   - If the connection is successful, there are two databases that already exist (`admin` and `local`)

4. Using Compass App for CRUD Operaations

   - Let's create a new database `CAMT` by clicking the plus symbol (+)
     - Give the Database Name => `CAMT`
     - Give the Collection Name => `tours`
     - Click `Create Database`
       <br/><br/><img width="512" src="img/img16.png"/><br/></br>
     - Follow the steps in the picture below to create a new simple tour record
       <br/><br/><img width="1024" src="img/img17.png"/><br/></br>

5. Finish

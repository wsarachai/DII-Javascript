## [Home](../../../README.md) > [Back](../lesson.md) > Coding Execrise #1

### Your tasks:

1. Google Chrome Console

   - In chrome browser, On the top right (The three dot on the top right <img height="16" src="imgs/img-4.png"/>), select the `Custom and control Google Chrome` menu and select `More Tools->Developer Tools` or right click on the page and select `Inspect`
   - In the developer tools, click the "console" tab.
   - Test these code below:

     ```
     console.log("CAMT");
     console.log(23);

     let firstName = "Matilda";

     console.log(firstName);
     console.log(firstName);
     console.log(firstName);

     // Variable name conventions
     let jonas_matilda = "JM";
     let $function = 27;
     ```

     ```
     let person = "John";
     let PI = 3.1415;

     let myFirstJob = "Coder";
     let myCurrentJob = "Teacher";

     let job1 = "programmer";
     let job2 = "teacher";

     console.log(myFirstJob);
     ```

     ```
     let javascriptIsFun = true;
     console.log(javascriptIsFun);

     console.log(typeof true);
     console.log(typeof javascriptIsFun);
     console.log(typeof 23);
     console.log(typeof ‘Keng');

     javascriptIsFun = 'YES!';
     console.log(typeof javascriptIsFun);
     ```

     ```
     let year;
     console.log(year);
     console.log(typeof year);

     year = 1991;
     console.log(typeof year);

     console.log(typeof null);
     ```

2. Install `Live server` extension.
   - Select the extension tab and type `Live server` in the search box as shown below:
     <br/><br/><img width="600" src="imgs/img-1.png"><br/><br/>
   - Click `Install` button
3. JavaScript coding basic

   - Open the [index.html](index.html) file and clicks on the <img height="16" src="../../common/imgs/go-live.png"> button at the status bar to start the Live-Server.
     <img width="512" src="imgs/img-2.png"/>
   - The `index.html` load and execute the `script.js` file and we can see some output in the console.
   - Write the `script.js` file to display the output as shown below:

     ```
     CAMT Stationery Shop
     10-01-2023
     Order No.#1011
     Mr.John Doe
     --------------------------------------
     No  Description   QTY   Price   Total
     --------------------------------------
     1   Cutter        1     169.52  169.52
     2   Steel Ruler   2     315.03  630.06
     3   Eraser        10    34.00   340.00
     4   Pencil Case   1     124.77  124.77
     --------------------------------------
         Total                     1,264.35
     --------------------------------------
     ```

   - Students must use variables to hold the value and use it to display the output.

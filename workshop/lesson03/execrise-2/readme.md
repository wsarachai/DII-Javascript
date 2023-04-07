## [Home](../../../README.md) > [Back](../lesson.md) > Execrise #2

### Decorate the Recpie Website with using style sheet (CSS)

### Your tasks:

1. Open the [index.html](index.html) file and clicks on the <img height="16" src="../../common/imgs/go-live.png"> button at the status bar to start the Live-Server.
2. Open the [main.css](main.css) file and follow the instructions below to decorate the [index.html](index.html) file using CSS tags:

   - Decorate the background color of `body` element to `#5f5f5f`
   - Decorate the color of `h1` to `#ffffff`, margin to `10px 0 15px 0`, and text-align to `center` as shown below:

     ```
     h1 {
       color: #ffffff;
       margin: 10px 0 15px 0;
       text-align: center;
     }
     ```

   - Decorate the color of `h2` to `#7facaa`, margin to `10px 0 20px 0`, and text-align to `center`
   - Decorate the color of `h3` to `#7facaa`, margin to `15px 0 15px 0`, border-bottom to `1px solid #cccccc`, and padding-bottom to `3px`
   - Decorate the padding of `ol` and `ul` to `0 0 0 50px`
   - Query the `.nav li` and set the display to `inline` as shown below:
     ```
     .nav li {
       display: inline;
     }
     ```
   - Query the `.nav` and decorate with the CSS attributes as shown below:

     ```
     padding-left: 0;
     text-align: center;
     ```

   - Query the `.nav a` and decorate with the CSS attributes as shown below:

     ```
     color: #0000af;
     text-decoration: none;
     ```

   - Query the `.header` and decorate with the CSS attributes as shown below:

     ```
     padding: 10px 10px 10px 10px;
     background-color: #b56663;
     ```

   - Query the `.header a` and decorate with the CSS attributes as shown below:

     ```
     color: #ffffff;
     ```

   - Query the `.main-content` and decorate with the CSS attributes as shown below:

     ```
     width: 500px;
     padding: 20px 20px 20px 20px;
     border: 1px solid #cccccc;
     margin: 30px auto 0 auto;
     background-color: #ffffff;
     ```

   - For the images, decorate with the CSS attributes as shown below:
     ```
     .photos {
       list-style-type: none;
       padding: 0;
     }
     ```
     ```
     .photos img {
       width: 100px;
       height: 100px;
     }
     ```
     ```
     .photos li {
       display: inline;
       padding-left: 11px;
     }
     ```

3. Open the [recipes.html](recipes.html) file and clicks on the <img height="16" src="../../common/imgs/go-live.png"> button at the status bar to start the Live-Server.
4. Open the [main.css](main.css) file and append the CSS as show below:
   ```
      .recipes {
     list-style-type: none;
     padding: 0;
   }
   ```
   ```
   .recipes img {
     height: 100%;
     width: 100px;
     display: block;
     float: left;
     padding-right: 10px;
   }
   ```
   ```
   .recipes li {
     border: 1px solid #b56663;
     padding-left: 15px;
     margin-bottom: 5px;
     height: 80px;
   }
   ```
   ```
   .recipes h3 {
     border-bottom: 0;
   }
   ```
   ```
   .recipes a {
     color: #7facaa;
     text-decoration: none;
   }
   ```

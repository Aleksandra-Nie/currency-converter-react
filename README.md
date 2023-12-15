# Currency-converter
A currency converter is a tool that allows you to convert the value of one currency into another. Additionaly, depending on the currency you choose, it shows currency exchange rate. 
  
To use a currency converter, you typically enter the amount of money you want to convert, select the currency you are converting from, and then choose the currency you want to convert to. The converter will then display the converted amount based on the current exchange rate between the two currencies. Below short demonstration:

![currency-converter-react](src/images/Animation2.gif)
## Demo
https://aleksandra-nie.github.io/currency-converter-react/
## Technologies

| HTML          | CSS                | JavaScript                        | ReactJS                                   |
|---------------|--------------------|-----------------------------------|-------------------------------------------|
| Google Fonts  | Normalize CSS      | ES6                               | create-react-app                          |
|               | grid               | JSON                              | Webpack                                   |
|               | flex               | Error handling (try, catch)       | Babel                                     |
|               | media queries      | API request                       | React DOM                                 |
|               | BEM                | fetch & axios                     | useState, useEffect, useRef               |
|               |                    | Promise, async / await            | Custom hooks                              |
|               |                    |                                   | setInterval, setTimeout                   |
|               |                    |                                   | Styled Components                         |



## Features
Currency converter is responsive on both website and mobile phone.
## Additional information
Current exchange rates come from app.currencyapi.com.\
The app has loading and error state handling. If data becomes corrupted or there is a connectivity issue, an error message will be displayed.
## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

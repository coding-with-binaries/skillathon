
# LearnUp
"LearnUp" is an innovative tool designed to bridge the gap between differently-abled individuals and technology. Our goal is to create a more inclusive world where everyone has equal access to information and opportunities, regardless of their abilities. To achieve this, we have created a versatile tool that offers multiple features to cater to the needs and preferences of the consumers.

## Code Setup

### Setting up the backend
**Install Python:**

`brew install python3`

**Install Requirements:**

1. Install all the requirements
  `python3 -m pip install -r requirements.txt`

2. Install punkt in nltk:

    Run python terminal by typing `python3`, then type

    ```
    >>>import nltk
    >>>nltk.download("punkt")
    ```

3. Exit python terminal with ctrl + D

**Running the app**

Run the app using Flask:
Move into folder skillathon-backend
`python3 app.py`

Sample API calls for Users and Articles CRUD can be found here : [Documentation Collection](https://documenter.getpostman.com/view/7484288/2s93CPqsDv)


Sample API calls for Translations & Summarizations can be found here : [Documentation Collection](https://documenter.getpostman.com/view/26052824/2s93CPqCVN)




### Setting up the frontend

Move into folder skillathon-frontend

**Pre-requisites**
Make sure that you have `node` and `yarn` installed.

**Setting up the frontend application**

Run `yarn install`

**Build the app**

Run `yarn build`, this builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Running the app**

In the project directory run `yarn start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload with every code change.

**Testing the app**

Run `yarn test` to launch the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Supporting Resources

[Product Document](https://docs.google.com/document/d/1KBTWLD7Bi8MPWg4ZM1M03uwtefC_dl2DFBj7OjbVhos/edit#heading=h.uqotn8z6ewfu)

[PPT](https://docs.google.com/presentation/d/1a32S1L2tyMPSHrDJNq1Z00asqt0rHLui-ttmku0eOss/edit#slide=id.p)

[Link to Video](https://drive.google.com/file/d/1gYbh6Yq7-BsAzn4FbiY-400Wduw4vwQR/view?usp=sharing)

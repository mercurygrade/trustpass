Explainer Video: https://vimeo.com/802316527/0b9d0cc1c7

# Gallery application

Welcome to the Gallery Application, an example project included in this repository. The purpose of this project is to demonstrate how to use the Concordium Identity System (IDS) to create a secure and authorized webpage. This webpage only displays the images of the gallery items once the user has successfully completed a verification process.

The backend for this demo can be accessed within the verifier folder. The backend serves as the foundation for the authorization process, where the user must provide a proof that meets the demands of the backend's statement. With this example, you will gain a better understanding of how the Concordium IDS can be used to create a secure and authorized user experience.

## Prerequisites:

Google Chrome browser with the Concordium browser wallet extension installed and set up with an account. This is required for connecting and authorizing the user.
Access to a Concordium node that exposes the v2 GRPC API. The backend of the demo project is set to expect the API at localhost:20000, however, this can be changed using the node parameter.
Cargo/Rustc must be installed on the device to build the Rust backend of the demo project.

## Installing

-   Run `yarn`.

## Running the example

-   Run `yarn build` in a terminal
-   Run `yarn build-verifier` (This builds the [backend](./verifier/) using cargo/rustc)

-   Run `yarn start --statement "$(<verifier/config/statement.json)" --names "$(<verifier/config/names.json)"` (This will run the backend, which also host the front-end, check its [README](./verifier/README.md) for more information)
-   Open URL logged in console (on default http://127.0.0.1:8100)

To have hot-reload on the front-end (useful for development), run `yarn watch` in a separate terminal instead of `yarn build` in the first step.

## Run as docker
The Dockerfile for this demo project must be run from the project's root folder using the following command:

Copy code
docker build -t gallery -f gallery/Dockerfile .
Once the image is built, you can run it with the following command:

css
Copy code
docker -p 8100:8100 run gallery
For more information on how to configure the application using environment variables, you can refer to the Dockerfile.

<h3 align="center">Weekly</h3>
<br/>
Weekly is an open-source diary app that you can self host to keep your daily diary private and secure.

## Prerequisites
 1. Install Docker && Docker compose
 2. Install [pnpm](https://pnpm.io/installation)

## SSL For local Development
### If you have Certs:
1. create an `.ssl` directory in project root and copy your cert.pem and key.pem files into it.
2. run `pnpm certs:copy`
### Don't have certs?:
1. run `pnpm certs:generate` to create and copy your certs to the appropriate folders.
2. configure your browser or OS to use these certs on localhost.

## Install Dependencies
Run `pnpm install -r`

## Development 
Set your `.env` file based environment variables and run `docker compose up` to run the entire stack for local development.

## Web - Frontend
After running `docker compose up` open your browser and visit [https://localhost:5134](https://localhost:5134)

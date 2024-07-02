# User Microservices
The system contains 3 microservice architecture projects for creating a user and sending notifications.


![image](https://github.com/fokaaas/user-microservices/assets/114052215/0f232588-e82c-432f-a157-7e8e6529041b)

## Tech Stack
- TypeScript
- NestJS
- Prisma
- PostgreSQL
- RabbitMQ
- Redis
- BullMQ
- Swagger

You can view API documntation with link: <BASE_URL>/api

## Run with Docker Compose
Firstly, create a .docker.env file that contains environment variables for our services. And run:

```bash
docker compose up
```

## Run manually
Add .env file for selected project and run with command:

```bash
pnpm start:dev
```

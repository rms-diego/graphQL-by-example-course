import { startStandaloneServer } from '@apollo/server/standalone';
import { server } from './app';

async function bootstrap() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT) },
  });

  console.log(`Server is running\nLink: ${url}`);
}

bootstrap();

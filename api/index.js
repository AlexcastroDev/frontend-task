/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createServer } from "miragejs"
import { faker } from '@faker-js/faker';

const UseDataServer = () => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    return {
      getMovies: ({queryParams: { perPage }}) => {
        const data = {
          movies: [],
        };

        for (let i = 1; i <= perPage; i++) {
          data.movies.push({
            id: `movie-${i}`,
            title: capitalizeFirstLetter(faker.lorem.words()),
            director: faker.name.findName(),
            description: faker.lorem.paragraph(),
            year: faker.date.past(10).getFullYear(),
            coverImage: faker.image.business(),
          });
        }

        return data;
      }
    }
  };
  

export function makeServer({ environment = "test" } = {}) {
    const serverMockData = UseDataServer()

    let server = createServer({
        environment,
    
        routes() {
          this.namespace = "api"
    
          this.get("/movies", (schema, params) => serverMockData.getMovies(params))
        },
      })
    
    return server
}
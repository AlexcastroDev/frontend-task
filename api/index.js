/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createServer } from "miragejs"
import { faker } from '@faker-js/faker';

const UseDataServer = () => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    return {
      getMovies: ({queryParams: { perPage, search }}) => {
        const data = {
          movies: [],
          pagination: {
            perPage,
            size: 5 // Just a mock size
          }
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

        if(search) {
          const regex = new RegExp(search)
          console.log(regex, data.movies)
          data.movies = data.movies.filter(movie => movie.title.match(regex))
        }

        if(data.movies.length < perPage) {
          data.pagination = 1
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
         
          this.get("/movies", (schema, params) => serverMockData.getMovies(params), { timing: 1200 })
        },
      })
    
    return server
}
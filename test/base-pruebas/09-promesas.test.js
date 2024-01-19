import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroesArr from "../../src/data/heroes";

describe("Pruebas en 09-promesas", () => {

  test("getHeroeByIdAsync debe retornar un héroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      // expect(hero).toEqual({
      //   id: 1,
      //   name: "Batman",
      //   owner: "DC",
      // });


      // No funciona el filter, pero si el find porque devuelve unicamente el elemento, y en este contexto
      // la naturaleza del elemento es un objeto, a cambio del filter que devuelve un array
      // y por dentro el resultado de la búsqueda
      expect( hero ).toStrictEqual( heroesArr.find( (heroe) => heroe.id === id ) )

      done();
    });
  });

  test("getHeroeByIdAsync debe retornar un error si el héroe no existe", (done) => {

    const id = 100;
    getHeroeByIdAsync(id)
    .then( hero => {

      expect( hero ).toBeFalsy();
      done();
    })
    .catch(err => {

      expect( err ).toBe(`No se pudo encontrar el héroe ${id}`)

      done();
    });
  });

});

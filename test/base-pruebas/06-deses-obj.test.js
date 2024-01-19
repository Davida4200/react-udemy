import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe retornar un objeto', () => {

    const clave = '123';
    const edad = 45;

    const contexto = usContext({clave, edad});

    expect(contexto).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    })

  })
})
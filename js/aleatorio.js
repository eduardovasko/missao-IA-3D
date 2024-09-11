const nomes = ["Barbara", "Luiza", "Silvane", "Beatriz", "Evelin", "Alice"]

export function aleatorio (lista) {
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}
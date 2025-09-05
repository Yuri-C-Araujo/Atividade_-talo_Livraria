interface ILivro{
    titulo: string;
    ano: number;
    isbn: number;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    exibirDados(): void;
    atualizarEstoque(quantidade: number): void;
}

interface IEbook extends ILivro{
    tamanArquivo: number;
}

class LivroFisico implements ILivro{
    titulo: string;
    ano: number;
    isbn: number;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    constructor(titulo: string, ano: number, isbn: number, preco: number, autor: string, editora: string, estoque: number){
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }

    exibirDados(): void {
        console.log(`---DADOS DO LIVRO---`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque} unidades`);
    }

    atualizarEstoque(quantidade: number): void {
        this.estoque += quantidade;
    }
}

class Ebook implements IEbook{
    titulo: string;
    ano: number;
    isbn: number;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;
    tamanArquivo: number;

    constructor(titulo: string, ano: number, isbn: number, preco: number, autor: string, editora: string, estoque: number, tamanArquivo: number){
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanArquivo = tamanArquivo;
    }

    exibirDados(): void {
        console.log(`---DADOS DO EBOOK---`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque} unidades`);
        console.log(`Tamanho do Arquivo: ${this.tamanArquivo} MB`)
    }

    atualizarEstoque(quantidade: number): void {
        this.estoque += quantidade;
    }
}

class GerenciarLivraria{
    
}
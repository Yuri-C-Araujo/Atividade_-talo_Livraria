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
    private livros: ILivro[] = [];

    adicionarLivro(livro: ILivro): void{
        this.livros.push(livro);
        console.log(`O livro ${livro.titulo} foi adicionado à livraria!`);
    }

    excluirLivro(isbn: number): void {
        const tamanhoArray = this.livros.length;

        this.livros = this.livros.filter(livro => livro.isbn !== isbn);
    
        if (this.livros.length < tamanhoArray) {
            console.log(`O livro com ISBN ${isbn} foi EXCLUÍDO com sucesso.`);
        } else {
            console.log(`O livro com ISBN ${isbn} NÃO encontrado.`);
        }
    }

    venderLivro(isbn: number, quantidade: number): void {
        const livro = this.livros.find(book => book.isbn === isbn);

        if (!livro) {
            console.log(`Livro NÃO encontrado.`);
            return;
        }

        if (livro.estoque >= quantidade) {
            livro.atualizarEstoque(-quantidade);
            console.log(`Venda REALIZADA com sucesso!`);
        } else {
            console.log(`Venda NÃO realizada: Estoque insuficiente.`);
        }
    }

    listarLivros(): void {
        console.log("-------------------------------------");
        console.log("      INVENTÁRIO DA LIVRARIA");
        console.log("-------------------------------------");
        if (this.livros.length === 0) {
            console.log("Nenhum livro cadastrado no momento.");
        } else {
            this.livros.forEach(livro => livro.exibirDados());
        }
        console.log("-------------------------------------\n");
    }
}


const minhaLivraria = new GerenciarLivraria();

const livroFisico1 = new LivroFisico("Homem-Aranha", 2002, 12345, 30.00, "Stan-Lee & Steve Ditko", "Marvel Comics", 20);
const livroFisico2 = new LivroFisico("O Lula", 2023, 67891, 1.00, "Alexandre de Morais", "Janja", 13);
const ebook1 = new Ebook("História de Ibn PINTO", 2025, 54321, 40.00, "Ibn Pinto e Silva", "Grupo Jota Pinto", 50, 5);

minhaLivraria.adicionarLivro(livroFisico1);
minhaLivraria.adicionarLivro(livroFisico2);
minhaLivraria.adicionarLivro(ebook1);
console.log("\n");

minhaLivraria.listarLivros();

console.log("--- Realizando Operações ---\n");
minhaLivraria.venderLivro(12345, 2);
minhaLivraria.venderLivro(54321, 6);
minhaLivraria.venderLivro(99999, 1);
minhaLivraria.excluirLivro(54321);
console.log("\n");

minhaLivraria.listarLivros();
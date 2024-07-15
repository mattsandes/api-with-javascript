# Reunião

> Somos uma pequena bibioteca e queremos controlar nossa saida e entrada de livros. Gostariamos tambem de cadastrar o usuario que pegaram os livros e cadastrar os livros tambem alem de buscar os resgistros de emprestimos.

## Dados
- Usuario: [nome_completo, CPF, telefone, endereço, email]
- Livro: [nome, quantidade, autor, genero, ISBN]
- Emprestimo: [usuario_id, data_retorno, livro_id, data_devolução, data_said]

## UseCases (Regras de negócios)

[] Cadastrar um novo usuario
[]  - cpf ou email devem ser unicos

[] Buscar um cadastro de usuario pro cpf
[]  - Retornar um usuario ou vazio

[]  Cadastrar um novo livro
[]  - ISBN deve ser unico

[]  Buscar um livro por nome ou ISBN
[]  - retorna um livro ou vazio

[] Emprestar um livro ao usuario
[]  - a data de retorno não pode ser maior do que a data de saida
[]  - o mesmo usuario não pode estar com o mesmo livro com o mesmo ISBN ao mesmo tempo
[]  - o mesmo usuario pode estar com o mesmo livro com o ISBN diferente ao mesmo tempo
[]  - ao cadastrar um emprestimo, sera enviado um email automaticamente informando o nome do livro, nome do usuario, CPF, a data de saida e a data de retorno;

[] Devolver o livro empresta
[] - caso o usuario tenha atrasado, sera gerada uma multa fix de R$ 10,00

[] Mostrar todos os emprestimos pendentes, com o nome do livro, nome do usuairo, CPF, data de saida e data de retorno. Ordenamos pela data de retorno mais antiga

## Estruturas
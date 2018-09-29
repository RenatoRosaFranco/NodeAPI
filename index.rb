# frozen_string_literal: true

# 37) O código abaixo expõe 
# conceitos da Programação 
# Orientada a Objeto (POO).
class Passaro
	def voar
		puts 'Passaro voando...'
	end
end

class Aguia < Passaro
	def voar
		puts 'Aguia voando....'
	end
end

class Tucano < Passaro
	def voar
		puts 'Tucano voando'
	end
end

# Instancias 
p passaro = Passaro.new
p passaro.voar

p passaro = Aguia.new
p passaro.voar

=begin
Quais conceitos estão presentes nesse código?
--------------------------------------------------------------------
 | a) Herança e Polimorfismo.  <-- Resposta correta.
 | b) Herança e Encapsulamento.
 | c) Encapsulamento e Polimorfismo.
 | d) Herança, Encapsulamento e Polimorfismo

 Explicação

 Os conceitos presentes nessa questão são: [Herança e Polimorfismo]

 Temos uma classe, Passaro que serve de base para a criação de 
 outras classes baseadas na mesma. expressando assim o conceito de 
 herança, as classes que herdam de passaro, herdam seu estado
 e comportamentos.

	Classe -> Conceito Abstrato
		| Estado -> Atributos
		| Comportamentos -> Funções

	Polimorfismo
		| Em sua etimologia vem a ser  (multi-formas), o polimorfismo é
		| caracterizado quando uma ou mais classes distintas têm métodos
		| de mesmo nome, de forma que uma função possa utilizar um objeto
		| de qualquer uma das classes polimorficas, sem necessidade de 
		| tratar de forma diferenciada conforme a classe do objeto.

=end
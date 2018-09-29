# frozen_string_literal: true

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
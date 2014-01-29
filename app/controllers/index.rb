get '/' do
  erb :index
end

post '/' do
  content_type :json
  input = params[:user_input]
  if input == input.upcase
    grandma_response = "Not since 1985."
  else
    grandma_response = "Speak up, Sonny!"
  end
  {:response => grandma_response}.to_json
end

require 'sinatra'
require_relative 'config/application'

set :bind, '0.0.0.0'  # bind to all interfaces

get "/" do
redirect "/projects"
end

get "/projects" do
  @userprojects = Project.all
  erb:index
end

get "/projects/:id" do
  @project = Project.find(params[:id])
  @users = @project.users
  erb:projectshow
end

enable :sessionspr

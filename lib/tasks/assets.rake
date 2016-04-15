namespace :assets do
  task :precompile => "webpack:compile"
end

namespace :webpack do
  task :compile => :npm do
    sh "npm run compile"
  end

  task :watch => :npm do
    sh "npm run watch"
  end
end

task :npm do
  sh "npm install"
end

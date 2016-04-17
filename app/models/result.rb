class Result < ActiveRecord::Base
  CHARS = [*(?a..?z), *(?A..?Z), *(?0..?9)]
  before_save do
    self.slug = Array.new(7){ CHARS.sample }.join
  end

  def to_param
    slug
  end
end

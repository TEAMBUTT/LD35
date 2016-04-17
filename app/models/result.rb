class Result < ActiveRecord::Base
  before_save do
    self.slug = SecureRandom.base64(6)
  end

  def to_param
    slug
  end
end

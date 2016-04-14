require 'rails_helper'

RSpec.describe Butt do
  describe "#name" do
    subject { butt.name }
    let(:butt) { Butt.new name: "John Hawthorn" }
    it { is_expected.to eq "John Hawthorn" }
  end
end

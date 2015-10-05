require 'component_tag'
module CardHelper
  include ComponentTag

  component_tag 'card', 'article'
  component_tag 'card_header', 'header'
  component_tag 'card_body'
end

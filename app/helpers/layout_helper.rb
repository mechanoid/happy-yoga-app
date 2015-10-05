require 'component_tag'
module LayoutHelper
  include ComponentTag

  component_tag 'layout', 'section'
  component_tag 'layout_header', 'header'
  component_tag 'layout_body'
end
